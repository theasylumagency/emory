"use client";

import { useState } from "react";
import Image from "next/image";
import { Arrow } from "./icons";
import { BookButton } from "./booking";
import { services, specialists, stories } from "@/lib/content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header"><a href="#" className="wordmark" aria-label="Emory — დასაწყისი">emory<span aria-hidden="true">✳</span></a><nav id="main-navigation" aria-label="მთავარი ნავიგაცია" className={menuOpen ? "main-nav is-open" : "main-nav"}>{[["services", "სერვისები"], ["work", "ნამუშევრები"], ["team", "გუნდი"], ["contact", "კონტაქტი"]].map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav><div className="header-actions"><BookButton className="button button-blue header-book">ჩაწერა <Arrow diagonal /></BookButton><button className="menu-toggle" aria-label={menuOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span className={menuOpen ? "menu-lines open" : "menu-lines"} /></button></div></header>;
}

export function Services() {
  const [active, setActive] = useState<string | null>(null);
  return <><div className="service-list">{services.map(service => <div className={`service-row ${active === service.id ? "is-active" : ""}`} key={service.id}><button className="service-trigger" aria-expanded={active === service.id} aria-controls={`service-${service.id}`} onClick={() => setActive(active === service.id ? null : service.id)}><span className="service-name">{service.name}{service.id === "consultation" ? <span className="service-dot">↗</span> : null}</span><span className="service-english">{service.english}</span><span className="service-price">{service.price}</span><span className="service-plus" aria-hidden="true">{active === service.id ? "−" : "+"}</span></button><div className="service-detail" id={`service-${service.id}`} hidden={active !== service.id}><div><p>{service.description}</p><span>{service.includes}</span></div><div className="service-detail-action"><span>{service.time}</span><BookButton service={service.id} className="button button-blue">{service.id === "consultation" ? "მოდი, ვილაპარაკოთ" : "ამაზე ჩავეწერები"}<Arrow diagonal /></BookButton></div></div></div>)}</div><p className="pricing-note">საორიენტაციო ფასები კონცეფციისთვის. საბოლოო ღირებულება კონსულტაციისას დაზუსტდება.</p></>;
}

export function WorkStories() {
  const [selected, setSelected] = useState(0);
  const story = stories[selected];
  return <><div className="case-selector" aria-label="ქეისის არჩევა">{stories.map((item, index) => <button key={item.tab} aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.tab}<Arrow diagonal /></button>)}</div><article className="featured-case" aria-live="polite"><div className="case-image"><Image key={story.image} src={story.image} alt={story.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /><span className="photo-tag">{story.tag}</span></div><div className="case-copy"><span className="eyebrow">ამბავი სავარძლიდან · კონცეფცია</span><h3>{story.title}</h3><div className="case-paragraph"><span>სურვილი</span><p>{story.wanted}</p></div><div className="case-paragraph"><span>ჩვენი მიდგომა</span><p>{story.approach}</p></div><div className="case-facts"><span>{story.time}</span><span>{story.stylist}</span><strong>{story.price}</strong></div><BookButton service={story.service} className="text-link">მსგავსი შედეგი მინდა <Arrow diagonal /></BookButton><p className="micro-copy case-disclaimer">საილუსტრაციო სცენარი და AI ფოტო — რეალური კლიენტის ქეისი მოგვიანებით დაემატება.</p></div></article></>;
}

export function TeamExplorer() {
  const [selected, setSelected] = useState(0);
  const specialist = specialists[selected];
  return <><div className="team-layout"><div className="team-photo"><Image src="/images/team-concept.png" alt="სამი სპეციალისტის ყოველდღიური მომენტის კონცეფცია — საილუსტრაციო AI ფოტო" fill sizes="(max-width: 900px) 100vw, 65vw" />{specialists.map((person, index) => <button className={`person-marker ${index === selected ? "selected" : ""}`} key={person.id} style={{ left: person.x, top: person.y }} aria-label={`${person.name} — ${person.role}`} aria-pressed={index === selected} onClick={() => setSelected(index)}><span className="marker-dot" />{person.name}<span aria-hidden="true">+</span></button>)}<span className="team-photo-credit">გუნდის ფოტოს კონცეფცია · AI</span></div><div className="team-situations">{specialists.map((person, index) => <button key={person.id} aria-pressed={index === selected} onClick={() => setSelected(index)}><span>{person.situation}</span><span className="situation-name">{person.name}<Arrow /></span></button>)}<div className="specialist-detail" aria-live="polite"><span className="eyebrow">{specialist.name} · {specialist.role}</span><p>{specialist.description}</p><BookButton service={specialist.service} specialist={specialist.id} className="text-link">ავირჩევ {specialist.name}ს <Arrow diagonal /></BookButton></div></div></div><p className="pricing-note">გუნდის წარდგენის კონცეფცია — სახელები და პროფილები დროებითია.</p></>;
}

