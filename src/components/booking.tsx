"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import { services, specialists, type ServiceId } from "@/lib/content";
import { Arrow, Star } from "./icons";

type BookingSeed = { service?: ServiceId; specialist?: string };
const BookingContext = createContext<(seed: BookingSeed) => void>(() => {});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBooking] = useState<BookingSeed | null>(null);
  return <BookingContext.Provider value={setBooking}>{children}{booking ? <BookingDialog seed={booking} close={() => setBooking(null)} /> : null}</BookingContext.Provider>;
}

export function BookButton({ children, className = "button button-blue", service, specialist }: BookingSeed & { children: ReactNode; className?: string }) {
  const open = useContext(BookingContext);
  return <button type="button" className={className} onClick={() => open({ service, specialist })}>{children}</button>;
}

function todayInTbilisi() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tbilisi", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

function BookingDialog({ seed, close }: { seed: BookingSeed; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const [step, setStep] = useState(seed.specialist ? 2 : seed.service ? 1 : 0);
  const [serviceId, setServiceId] = useState<ServiceId | "">(seed.service ?? "");
  const [specialistId, setSpecialistId] = useState(seed.specialist ?? "any");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [minimumDate] = useState(todayInTbilisi);
  const suggestedDates = Array.from({ length: 5 }, (_, index) => {
    const day = new Date(`${minimumDate}T12:00:00Z`);
    day.setUTCDate(day.getUTCDate() + index + 1);
    const weekdays = ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"];
    const months = ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"];
    return { value: day.toISOString().slice(0, 10), label: `${day.getUTCDate()} ${months[day.getUTCMonth()]} · ${weekdays[day.getUTCDay()]}` };
  });
  const service = services.find(item => item.id === serviceId);
  const specialist = specialists.find(item => item.id === specialistId);
  const titles = ["დღეს რა გინდა?", "ვისთან გინდა მოსვლა?", "როდის შეგხვდეთ?", "როგორ დაგიკავშირდეთ?", "ყველაფერი თავის ადგილზეა."];
  const availableSpecialists = specialists.filter(person => serviceId === "consultation" || person.service === serviceId || (serviceId === "care" && person.id === "ana"));

  useEffect(() => {
    const element = dialog.current;
    const focused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => { element?.close(); document.body.style.overflow = previousOverflow; focused?.focus(); };
  }, []);

  useEffect(() => { heading.current?.focus(); dialog.current?.scrollTo({ top: 0 }); }, [step]);

  function next(event: FormEvent) {
    event.preventDefault();
    if (step === 0 && !serviceId) return;
    if (step === 2 && (!date || !time || date < todayInTbilisi())) { setError("აირჩიე დღევანდელი ან მომავალი თარიღი და დრო."); return; }
    if (step === 3) {
      const digits = phone.replace(/\D/g, "");
      if (name.trim().length < 2 || !/^\+?[\d\s()-]+$/.test(phone) || digits.length < 9 || digits.length > 15) { setError("მიუთითე სახელი და სწორი ტელეფონის ნომერი (9–15 ციფრი)."); return; }
    }
    setError(""); setStep(step + 1);
  }

  return <dialog ref={dialog} className="booking-dialog" onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === event.currentTarget) { const box = event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close(); } }} aria-labelledby="booking-title" aria-describedby="booking-demo-note">
    <div className="booking-header"><span className="wordmark">emory<span aria-hidden="true">✳</span></span><button type="button" className="close-dialog" onClick={close} aria-label="ჩაწერის დახურვა">×</button></div>
    <p id="booking-demo-note" className="demo-notice">საცდელი ჩაწერა · მონაცემები სალონში არ იგზავნება.</p>
    {step < 4 ? <div className="booking-progress" aria-label={`ნაბიჯი ${step + 1} / 4`}>{["სერვისი", "სპეციალისტი", "დრო", "შენი მონაცემები"].map((label, index) => <span key={label} className={index <= step ? "current" : ""}><span>{index + 1}</span>{label}</span>)}</div> : null}
    <h2 id="booking-title" ref={heading} tabIndex={-1}>{titles[step]}</h2>
    {step < 4 ? <form onSubmit={next}>
      {step === 0 ? <fieldset className="booking-choices"><legend className="sr-only">აირჩიე სერვისი</legend>{services.map(item => <label key={item.id} className={serviceId === item.id ? "choice selected" : "choice"}><input required type="radio" name="service" value={item.id} checked={serviceId === item.id} onChange={() => { setServiceId(item.id); setSpecialistId("any"); }} /><span>{item.name}<small>{item.time}</small></span><span className="choice-price">{item.price}</span></label>)}</fieldset> : null}
      {step === 1 ? <><p className="booking-help">პირველად მოდიხარ? სპეციალისტის არჩევა აუცილებელი არ არის.</p><fieldset className="booking-choices"><legend className="sr-only">აირჩიე სპეციალისტი</legend><label className={specialistId === "any" ? "choice selected" : "choice"}><input type="radio" name="specialist" checked={specialistId === "any"} onChange={() => setSpecialistId("any")} /><span>ნებისმიერი თავისუფალი სპეციალისტი<small>ერთად შევარჩევთ შესაბამის ადამიანს</small></span></label>{availableSpecialists.map(person => <label className={specialistId === person.id ? "choice selected" : "choice"} key={person.id}><input type="radio" name="specialist" checked={specialistId === person.id} onChange={() => setSpecialistId(person.id)} /><span>{person.name}<small>{person.role} · საილუსტრაციო პროფილი</small></span></label>)}</fieldset></> : null}
      {step === 2 ? <div className="date-step"><p className="booking-help">დროები საილუსტრაციოა და რეალურ ხელმისაწვდომობას არ ასახავს.</p><div className="date-suggestions" aria-label="ახლო დღეები">{suggestedDates.map(day => <button type="button" key={day.value} aria-pressed={date === day.value} onClick={() => { setDate(day.value); setTime(""); setError(""); }}>{day.label}</button>)}</div><label className="field-label" htmlFor="booking-date">სასურველი თარიღი</label><input className="text-input" id="booking-date" type="date" min={minimumDate} value={date} required onInput={event => { setDate(event.currentTarget.value); setTime(""); setError(""); }} onChange={event => { setDate(event.target.value); setTime(""); setError(""); }} /><fieldset className="time-choices"><legend>სასურველი დრო</legend>{["11:00", "12:30", "14:00", "15:30", "17:00", "18:30"].map(slot => <label className={time === slot ? "time-choice selected" : "time-choice"} key={slot}><input required type="radio" name="time" value={slot} checked={time === slot} disabled={!date} onChange={() => setTime(slot)} /><span>{slot}</span></label>)}</fieldset><span className="micro-copy">თბილისის დრო · ვიზიტი: {service?.time}</span></div> : null}
      {step === 3 ? <><div className="booking-summary"><span>{service?.name} · {specialist?.name ?? "ნებისმიერი სპეციალისტი"}</span><strong>{date} · {time}</strong><span>საორიენტაციო ფასი: {service?.price}</span></div><label className="field-label" htmlFor="booking-name">შენი სახელი</label><input id="booking-name" className="text-input" name="name" autoComplete="given-name" required minLength={2} maxLength={80} value={name} onChange={event => setName(event.target.value)} placeholder="სახელი" /><label className="field-label" htmlFor="booking-phone">ტელეფონის ნომერი</label><input id="booking-phone" className="text-input" name="phone" type="tel" autoComplete="tel" required maxLength={24} value={phone} onChange={event => setPhone(event.target.value)} placeholder="+995 5XX XX XX XX" aria-describedby="privacy-note" /><p id="privacy-note" className="micro-copy">ეს დემოა. მონაცემები მხოლოდ ამ ფანჯარაში გამოიყენება და დახურვისას იშლება.</p></> : null}
      {error ? <p className="form-error" role="alert">{error}</p> : null}
      <div className="booking-actions">{step > 0 ? <button type="button" className="back-button" onClick={() => { setStep(step - 1); setError(""); }}>← უკან</button> : <span className="micro-copy">ოთხი მარტივი ნაბიჯი.</span>}<button className="button button-blue" type="submit" disabled={(step === 0 && !serviceId) || (step === 2 && (!date || !time))}>{step === 3 ? "შეჯამების ნახვა" : "შემდეგი"}<Arrow /></button></div>
    </form> : <div className="booking-finish"><Star /><p>{name.trim()}, აი, შენი ვიზიტის მონახაზი:</p><div className="booking-summary"><strong>{service?.name}</strong><span>{specialist?.name ?? "ნებისმიერი თავისუფალი სპეციალისტი"}</span><span>{date} · {time} · თბილისის დრო</span><span>{phone}</span></div><p className="finish-notice">ეს დემოა — ჯავშანი არ შექმნილა. რეალური ჩაწერა სერვისის დაკავშირების შემდეგ გახდება შესაძლებელი.</p><button type="button" className="button button-blue" onClick={close}>გასაგებია <Arrow /></button></div>}
  </dialog>;
}



