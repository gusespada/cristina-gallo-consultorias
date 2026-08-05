"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "./site-config";

type BookingStep = "slot" | "details" | "done";

const slots = [
  { day: "Mar", date: "11 AGO", times: ["10:00", "12:30", "17:00"] },
  { day: "Mié", date: "12 AGO", times: ["09:30", "14:00", "18:30"] },
  { day: "Vie", date: "14 AGO", times: ["11:00", "15:30"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [step, setStep] = useState<BookingStep>("slot");
  const [slot, setSlot] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const progress = { slot: 1, details: 2, done: 3 }[step];

  const openBooking = () => {
    setSlot("");
    setStep("slot");
    setBookingOpen(true);
  };

  const closeBooking = () => {
    setBookingOpen(false);
    setStep("slot");
  };

  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inicio de Cristina Gallo">
          <span className="brand-mark">CG</span>
          <span><b>Cristina Gallo</b><small>dirección · docencia · investigación</small></span>
        </a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span /> <span /> <span /><span className="sr-only">Abrir menú</span>
        </button>
        <nav id="nav" className={menuOpen ? "nav open" : "nav"} aria-label="Principal">
          <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Consultoría</a>
          <a href="#trayectoria" onClick={() => setMenuOpen(false)}>Trayectoria</a>
          <a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a>
          <button className="button button-small" onClick={() => openBooking()}>Reservar</button>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Consultoría para el mundo coral</p>
            <h1>Dirigir.<br /><em>Comprender.</em><br />Transformar.</h1>
            <p className="hero-lead">{siteConfig.profile.statement}</p>
            <div className="hero-actions">
              <button className="button" onClick={() => openBooking()}>Encontrar un horario <span>↗</span></button>
              <a className="text-link" href="#servicios">Conocer la consultoría</a>
            </div>
          </div>
          <div className="portrait">
            <Image src="/cristina-gallo.jpeg" alt="Retrato de Cristina Gallo" fill sizes="(max-width: 900px) 100vw, 46vw" priority />
            <div className="portrait-noise" aria-hidden="true" />
            <p>Cristina<br />Gallo</p>
            <small>DIRECTORA CORAL · DOCENTE-INVESTIGADORA</small>
          </div>
          <div className="hero-note"><span>01</span><p>Consultoría online<br />para directoras y directores de coro</p></div>
        </section>

        <section className="intro section" id="sobre-mi">
          <div className="section-label"><span>01</span> SOBRE MÍ</div>
          <div className="intro-copy">
            <p className="display-copy">{siteConfig.profile.shortBio}</p>
            <div className="two-columns"><p>{siteConfig.profile.longBio}</p><p>La consultoría propone acompañar la práctica profesional de cada director o directora con preguntas precisas, escucha crítica y herramientas aplicables a la dirección, la interpretación y el trabajo de ensayo.</p></div>
          </div>
        </section>

        <section className="services section" id="servicios">
          <div className="section-heading">
            <div><div className="section-label light"><span>02</span> CONSULTORÍA</div><h2>Una consultoría,<br /><em>tres formas de abordaje.</em></h2></div>
            <p>Un encuentro individual para profesionales de la dirección coral, adaptado a las necesidades concretas de cada coro, repertorio o proyecto.</p>
          </div>
          <div className="service-grid">
            {siteConfig.consultation.features.map((item, index) => (
              <article className="service-card" key={item.name}>
                <div className="card-top"><span>0{index + 1}</span></div>
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="feature-tag">Dirección coral · Aplicación práctica</p>
              </article>
            ))}
          </div>
          <div className="section-cta"><button className="button" onClick={openBooking}>Encontrar un horario <span>↗</span></button></div>
        </section>

        <section className="process section">
          <div className="section-label"><span>03</span> CÓMO FUNCIONA</div>
          <div className="process-layout">
            <div className="process-title"><h2>Simple, claro<br />y <em>a tu ritmo.</em></h2><button className="button" onClick={openBooking}>Encontrar un horario <span>↗</span></button></div>
            <ol>
              <li><span>01</span><div><h3>Definí qué querés trabajar</h3><p>Podés traer una obra, una dificultad gestual, un plan de ensayo o una pregunta sobre tu práctica.</p></div></li>
              <li><span>02</span><div><h3>Reservá tu horario</h3><p>Consultá la agenda y elegí entre los turnos disponibles.</p></div></li>
              <li><span>03</span><div><h3>Compartí el contexto</h3><p>Un breve formulario y los materiales previos ayudan a aprovechar mejor el encuentro.</p></div></li>
              <li><span>04</span><div><h3>Trabajamos en profundidad</h3><p>Nos encontramos online para analizar, probar alternativas y construir herramientas para tu dirección.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="career section" id="trayectoria">
          <div className="career-quote"><span>CG</span><blockquote>Voz, interpretación y territorio.</blockquote><p>Una práctica artística y pedagógica integrada</p></div>
          <div className="career-content">
            <div className="section-label light"><span>04</span> TRAYECTORIA</div>
            <h2>Experiencia que se vuelve<br /><em>herramienta compartida.</em></h2>
            <div className="credentials">{siteConfig.credentials.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
            <p>Dirige el proyecto “La performance vocal integrada en contexto musical multicultural. Proyecciones artísticas y didácticas de modelo UNVM (IV)”.</p>
          </div>
        </section>

        <section className="availability section" id="agenda">
          <div className="availability-copy"><div className="section-label"><span>05</span> AGENDA</div><h2>Tu próximo<br /><em>encuentro.</em></h2><p>Estos horarios son simulados para probar la experiencia. En producción se calcularán con disponibilidad real y Google Calendar.</p><div className="timezone"><span>◷</span><div><b>Zona horaria</b><p>Argentina · UTC−3</p></div></div></div>
          <div className="slot-preview">
            <p>PRÓXIMOS HORARIOS</p>
            {slots.map((group) => <div className="slot-row" key={group.date}><div><b>{group.day}</b><span>{group.date}</span></div><div>{group.times.slice(0,2).map((time) => <button key={time} onClick={() => { setSlot(`${group.day} ${group.date} · ${time}`); setStep("details"); setBookingOpen(true); }}>{time}</button>)}</div></div>)}
            <button className="button button-wide" onClick={() => openBooking()}>Ver toda la disponibilidad <span>↗</span></button>
          </div>
        </section>

        <section className="faq section" id="preguntas">
          <div><div className="section-label"><span>06</span> PREGUNTAS FRECUENTES</div><h2>Antes de<br /><em>encontrarnos.</em></h2></div>
          <div className="faq-list">{siteConfig.faq.map(([question, answer], index) => <div className="faq-item" key={question}><button aria-expanded={expandedFaq === index} onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}><span>{question}</span><b>{expandedFaq === index ? "−" : "+"}</b></button>{expandedFaq === index && <p>{answer}</p>}</div>)}</div>
        </section>

        <section className="final-cta"><p className="eyebrow">El próximo movimiento</p><h2>¿Trabajamos sobre<br /><em>tu dirección?</em></h2><button className="button button-light" onClick={() => openBooking()}>Encontrar un horario <span>↗</span></button></section>
      </main>

      <footer><div className="brand"><span className="brand-mark">CG</span><span><b>Cristina Gallo</b><small>dirección · docencia · investigación</small></span></div><p>Consultoría profesional en Dirección Coral · Online</p><div><Link href="/privacidad">Privacidad</Link><Link href="/terminos">Términos</Link><Link href="/cancelaciones">Cancelaciones</Link></div><small>© 2026 · Sitio prototipo</small></footer>

      {bookingOpen && <div className="modal-backdrop" role="presentation"><section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title"><header><div><p>PASO {progress} DE 3</p><div className="progress"><span style={{ width: `${progress * 33.333}%` }} /></div></div><button onClick={closeBooking} aria-label="Cerrar reserva">×</button></header>
        {step === "slot" && <div className="booking-body"><p className="eyebrow">{siteConfig.consultation.name}</p><h2 id="booking-title">Elegí día y horario</h2><p className="booking-hint">Horarios en Argentina · UTC−3 <button>cambiar</button></p><div className="booking-slots">{slots.map((group) => <div key={group.date}><p><b>{group.day}</b> {group.date}</p><div>{group.times.map((time) => <button className={slot === `${group.day} ${group.date} · ${time}` ? "selected" : ""} key={time} onClick={() => setSlot(`${group.day} ${group.date} · ${time}`)}>{time}</button>)}</div></div>)}</div><button className="button button-wide" disabled={!slot} onClick={() => setStep("details")}>Continuar</button></div>}
        {step === "details" && <div className="booking-body"><button className="back" onClick={() => setStep("slot")}>← Volver</button><p className="eyebrow">Tus datos</p><h2 id="booking-title">Prepará el encuentro</h2><div className="booking-summary"><span>{siteConfig.consultation.name}</span><b>{slot}</b><span>{siteConfig.consultation.duration} min · {siteConfig.consultation.modality}</span></div><form onSubmit={(e) => { e.preventDefault(); setStep("done"); }}><label>Nombre completo<input required name="name" autoComplete="name" /></label><label>Correo electrónico<input required name="email" type="email" autoComplete="email" /></label><label>¿Qué aspecto de tu práctica como director o directora de coro te gustaría trabajar?<textarea name="context" rows={3} /></label><label className="check"><input required type="checkbox" /> <span>Acepto las condiciones y la política de privacidad de esta demostración.</span></label><button className="button button-wide" type="submit">Solicitar la reserva</button></form></div>}
        {step === "done" && <div className="booking-body booking-success"><span className="success-mark">✓</span><p className="eyebrow">Solicitud simulada</p><h2 id="booking-title">Recibimos tu solicitud.</h2><p>En la versión productiva recibirías ahora la confirmación por correo y la invitación de calendario.</p><div className="booking-summary"><span>{siteConfig.consultation.name}</span><b>{slot}</b><span>Argentina · UTC−3</span></div><button className="button button-wide" onClick={closeBooking}>Volver al sitio</button></div>}
      </section></div>}
    </>
  );
}
