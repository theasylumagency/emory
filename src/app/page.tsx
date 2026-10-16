import Image from "next/image";
import { BookingProvider, BookButton } from "@/components/booking";
import { Header, Services, WorkStories, TeamExplorer } from "@/components/site";
import { Arrow, Star } from "@/components/icons";
import { mapsUrl } from "@/lib/content";

export default function Home() {
  return (
    <BookingProvider>
      <a className="skip-link" href="#main">მთავარ შინაარსზე გადასვლა</a>
      <Header />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <Image className="hero-image" src="/images/emory-editorial.png" alt="ცოცხალი მომენტი სალონის სავარძელში — Emory-ის სარედაქციო კონცეფცია" fill sizes="100vw" preload />
          <div className="hero-shade" />
          <div className="hero-top"><span>BARBER & BEAUTY</span><span>TBILISI, SABURTALO</span></div>
          <div className="hero-content"><span className="eyebrow">კარგია, როცა შენს თავს ჰგავხარ.</span><h1 id="hero-title">შენი თავი.<br />შენი წესებით.</h1><BookButton className="button button-white">იპოვე შენი დრო <Arrow diagonal /></BookButton></div>
          <div className="hero-bottom"><span>გივი კარტოზიას 10 · დელისი</span><a href="#services">დავიწყოთ შენით <span aria-hidden="true">↓</span></a></div>
          <span className="image-disclosure">AI · სარედაქციო ვიზუალი</span>
        </section>
        <div className="intro-strip section-shell"><p>კარგი თმა. კარგი საუბარი.<br /><span>შენი ადგილი საბურთალოზე.</span></p><p>შეჭრიდან დიდ ცვლილებამდე —<br />ჯერ გისმენთ. მერე ვიწყებთ.</p><Star /></div>
        <section className="services-section section-shell" id="services" aria-labelledby="services-title">
          <div className="section-heading"><div><span className="eyebrow">დაიწყე სურვილით</span><h2 id="services-title">დღეს რა გინდა?</h2></div><p>პროფესიული ტერმინები არ გჭირდება.<br />უბრალოდ გვითხარი, რას ფიქრობ.</p></div><Services />
        </section>
        <section className="work-section section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><span className="eyebrow">შედეგის მიღმა</span><h2 id="work-title">ყველა ცვლილებას<br />თავისი ამბავი აქვს.</h2></div><span className="concept-label">საილუსტრაციო ქეისები</span></div><WorkStories />
        </section>
        <section className="ninutsa" aria-labelledby="ninutsa-title">
          <Image src="/images/ninutsa-just-the-ends.png" alt="ნინუცა თითებით აჩვენებს, რამდენის შეჭრა უნდა — Emory-ის AI პერსონაჟი" fill sizes="100vw" /><div className="ninutsa-shade" />
          <div className="ninutsa-copy"><span className="eyebrow">ნინუცას ქრონიკები</span><h2 id="ninutsa-title">„მხოლოდ<br />ბოლოები.“</h2><p>ნინუცა. ყოველ ჯერზე.</p><BookButton service="haircut" className="text-link light-link">გასაგებია, მხოლოდ ბოლოები <Arrow diagonal /></BookButton></div><span className="ninutsa-credit">ნინუცა — Emory-ის AI პერსონაჟი</span>
        </section>
        <section className="team-section section-shell" id="team" aria-labelledby="team-title"><div className="section-heading"><div><span className="eyebrow">იპოვე შენი ადამიანი</span><h2 id="team-title">ვისთან მიხვიდოდი, თუ...</h2></div><p>ჯერ შენი ამბავი.<br />შემდეგ — შენი სპეციალისტი.</p></div><TeamExplorer /></section>
        <section className="manifesto section-shell"><Star /><div><span className="eyebrow">ჩვენი მიდგომა</span><h2>კარგი სპეციალისტი<br />ზოგჯერ გეტყვის <em>„არა“.</em></h2><p>თუ სასურველი ფერი შენს თმას დააზიანებს, ამას გეტყვით.<br className="desktop-break" /> და ერთად ვიპოვით გზას, რომელიც შენთვის უკეთესია.</p></div><span className="manifesto-note">გულწრფელობა<br />კარგი დასაწყისია.</span></section>
        <section className="consultation section-shell" aria-labelledby="consultation-title"><div><span className="eyebrow">იდეის გარეშეც შეგიძლია მოხვიდე</span><h2 id="consultation-title">რაღაც გინდა<br />შეცვალო.<br /><span>ჯერ არ იცი, რა.</span></h2></div><div className="consultation-aside"><Star /><p>ესეც მშვენიერი დასაწყისია.<br />მოდი, ვილაპარაკოთ. ვნახოთ შენი თმა, შენი ფოტოები, შენი იდეები — და ერთად მოვიფიქროთ.</p><BookButton service="consultation" className="button button-blue">დავიწყოთ კონსულტაციით <Arrow diagonal /></BookButton><span className="micro-copy">არ არის აუცილებელი, უკვე ყველაფერი იცოდე.</span></div></section>
        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title"><div className="contact-copy"><span className="eyebrow">შევხვდებით საბურთალოზე</span><h2 id="contact-title">შემოიარე.</h2><address>გივი კარტოზიას ქუჩა 10<br /><span>დელისი · საბურთალო · თბილისი</span></address><a className="text-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">გახსენი რუკაზე <Arrow diagonal /></a><p className="contact-pending">სამუშაო საათები და ტელეფონი დაზუსტდება.</p><a className="reviews-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">მოძებნე Emory Google Maps-ზე <Arrow diagonal /></a></div><a className="address-panel" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="გივი კარტოზიას 10 — გახსნა Google Maps-ზე"><div><span>GIVI KARTOZIA ST.</span><Arrow diagonal /></div><span className="address-number">10</span><div><span>დელისი, თბილისი</span><span>შენი ადგილი აქ არის.</span></div></a></section>
      </main>
      <footer className="footer section-shell"><div className="footer-top"><a className="wordmark footer-wordmark" href="#" aria-label="Emory — დასაწყისი">emory<span aria-hidden="true">✳</span></a><p>BARBER & BEAUTY<br />შენი თავი. შენი წესებით.</p><BookButton className="text-link">შევხვდებით Emory-ში <Arrow diagonal /></BookButton></div><div className="footer-bottom"><span>© Emory · Tbilisi</span><p>ვიზუალური კონცეფცია · ფოტოები შექმნილია AI-ით.<br />ქეისები, გუნდი და ფასები საილუსტრაციოა. ჩაწერა სატესტო რეჟიმშია.</p><a href="#main">ზემოთ ↑</a></div></footer>
      <div className="mobile-booking"><span>შენი შემდეგი ცვლილება.</span><BookButton className="button button-blue">ჩაწერა <Arrow diagonal /></BookButton></div>
    </BookingProvider>
  );
}

