import { useEffect, useMemo, useState } from "react";
import logoRuta from "./assets/logo-ruta-empresarial-horizontal.png";
import "./App.css";

const CALENDLY_URL = "https://calendly.com/comercialsomic/30min";
const WHATSAPP_NUMBER = "573176514902";
const VIDEO_ID = "CyiwIC8laz8";
const VSL_SECONDS = 90;

const modules = [
  {
    icon: "box",
    title: "Inventarios",
    text: "Control en tiempo real de productos, gestión de precios, ajustes, traslados, kardex y reconteos valorados.",
  },
  {
    icon: "users",
    title: "Módulo de Clientes",
    text: "Crea y gestiona clientes fácilmente, genera recibos de caja y mantén tu cartera visible en tiempo real.",
  },
  {
    icon: "truck",
    title: "Proveedores",
    text: "Ciclo completo de compras: órdenes, remisiones, devoluciones y control de cartera con reportes de rotación.",
  },
  {
    icon: "receipt",
    title: "Facturación / POS",
    text: "Cotizaciones, pedidos, facturación electrónica, POS, notas crédito y transmisión directa a la DIAN.",
  },
  {
    icon: "chart",
    title: "Contabilidad",
    text: "PUC, comprobantes, libros, exógena, centros de costos, balance general y estado de resultados integrados.",
  },
  {
    icon: "wallet",
    title: "Cartera",
    text: "Control de cuentas por cobrar y pagar, análisis de vencimientos y reportes de cartera en tiempo real.",
  },
];

const standardPlan = [
  {
    title: "Alcance del Plan",
    items: [
      "Hasta 5 usuarios simultáneos",
      "Capacitaciones con evaluaciones programadas",
      "Acceso al software por internet",
      "Garantía y soporte de funcionabilidad",
      "1.000 facturas POS + 200 documentos soporte/mes sin costo adicional",
      "Firma electrónica y servidor en la nube incluidos",
    ],
  },
  {
    title: "Facturación POS + Tradicional + DIAN",
    items: [
      "Remisiones, facturación POS y domicilios",
      "Cotizaciones, pedidos, notas crédito y débito",
      "Cajas, turnos, descuentos y arqueo de caja",
      "Reportes de ventas y rentabilidades",
    ],
  },
  {
    title: "Inventarios + Cartera + Compras + Contabilidad",
    items: [
      "Artículos, listas de precios, kardex y traslados",
      "Gestión de cartera: cuentas por cobrar y pagar",
      "Control de proveedores y compras",
      "Movimientos contables",
    ],
  },
  {
    title: "Ruta Empresarial incluida",
    items: [
      "Diagnóstico inicial de tu negocio",
      "Principios del modelo empresarial de éxito",
      "Estrategia de acción inicial personalizada",
      "Optimización de la implementación del POS",
    ],
  },
];

const growthPlan = [
  {
    title: "Ideal si tu empresa necesita",
    items: [
      "Más de 5 usuarios simultáneos",
      "Mayor volumen de facturación electrónica",
      "Módulos adicionales según tu operación",
      "Soporte prioritario según cotización",
      "Acompañamiento estratégico para operaciones de mayor escala",
    ],
  },
  {
    title: "Ruta Empresarial incluida",
    items: [
      "Diagnóstico inicial de tu negocio",
      "Principios del modelo empresarial de éxito",
      "Estrategia de acción inicial personalizada",
      "Optimización de la implementación del POS",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Con el POS / ERP logramos digitalizar toda la operación y centralizar la información en una sola plataforma. Hoy controlamos el inventario, los despachos y la facturación en tiempo real.",
    author: "Julio César Ardila",
    role: "Director de Calidad",
    place: "Discomedica · Neiva, Colombia",
  },
  {
    quote:
      "Antes teníamos pérdidas de mercancía que no podíamos explicar. Desde que implementamos el POS / ERP controlamos el inventario en tiempo real. En menos de 90 días mejoramos la rentabilidad.",
    author: "Paula León",
    role: "Administradora",
    place: "Supermercado Lemcitex · Cúcuta, Colombia",
  },
  {
    quote:
      "Llevamos más de 30 años trabajando con el ERP. El control de domicilios en tiempo real y el seguimiento al comportamiento del cliente nos ha dado una diferencia enorme en calidad del servicio.",
    author: "Marco Tulio Jiménez",
    role: "Representante Legal",
    place: "Droguería II Lago · Bucaramanga, Colombia",
  },
  {
    quote:
      "Desde que implementamos el POS / ERP tenemos un control total de la bodega, los despachos y el inventario. La facturación electrónica integrada con la DIAN nos da tranquilidad total.",
    author: "Oscar Uribe",
    role: "Representante Legal",
    place: "Confecciones Julio Uribe · Colombia",
  },
];

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Icon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "box") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="m21 8-9-5-9 5 9 5 9-5Z" />
        <path {...common} d="M3 8v8l9 5 9-5V8" />
        <path {...common} d="M12 13v8" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle {...common} cx="9.5" cy="7" r="4" />
        <path {...common} d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path {...common} d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (name === "truck") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M10 17h4V5H2v12h3" />
        <path {...common} d="M14 17h1m4 0h3v-6l-3-4h-5" />
        <circle {...common} cx="7.5" cy="17.5" r="2.5" />
        <circle {...common} cx="17.5" cy="17.5" r="2.5" />
      </svg>
    );
  }

  if (name === "receipt") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1V3Z" />
        <path {...common} d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M4 19V5" />
        <path {...common} d="M4 19h16" />
        <path {...common} d="M8 16v-5M12 16V8M16 16v-7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...common} d="M20 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
      <path {...common} d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path {...common} d="M12 13h.01" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ruta Empresarial ERP">
        <img src={logoRuta} alt="Ruta Empresarial ERP" />
      </a>
      <nav className="main-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#producto">Módulos POS / ERP</a>
        <a href="#planes">Planes y Precios</a>
        <a href="#contacto">Contacto</a>
        <a className="nav-highlight" href={CALENDLY_URL} target="_blank" rel="noreferrer">
          Agendar Reunión
        </a>
      </nav>
    </header>
  );
}

function UnlockBanner({
  unlocked,
  progress,
  onUnlock,
}: {
  unlocked: boolean;
  progress: number;
  onUnlock: () => void;
}) {
  return (
    <div className={`unlock-banner ${unlocked ? "hidden" : ""}`}>
      <div className="unlock-msg">
        <span aria-hidden="true">▶</span>
        <span>Sigue viendo el video para desbloquear el contenido</span>
      </div>
      <div className="unlock-track" aria-hidden="true">
        <div className="unlock-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="unlock-pct">{progress}%</span>
      <button className="unlock-skip" type="button" onClick={onUnlock}>
        Omitir
      </button>
    </div>
  );
}

function Hero({
  onVideoClick,
  videoPlaying,
}: {
  onVideoClick: () => void;
  videoPlaying: boolean;
}) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <p className="eyebrow">POS / ERP con Ruta Empresarial</p>
      <h1>
        Tu negocio creció. Es hora de gestionarlo con
        <span>RUTA EMPRESARIAL</span>
      </h1>
      <p className="hero-sub">
        Descubre cómo la combinación de tecnología, estructura y acompañamiento puede transformar la forma en que diriges tu empresa.
      </p>

      <div className="video-wrap">
        {videoPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="Video Ruta Empresarial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button className="video-poster" type="button" onClick={onVideoClick} aria-label="Reproducir video de Ruta Empresarial">
            <span
              className="video-thumb"
              style={{ backgroundImage: `url("https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg")` }}
            />
            <span className="play-layer">
              <span className="play-ring" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7Z" />
                </svg>
              </span>
              <span className="play-lbl">Ver video completo · 5-6 min</span>
            </span>
            <span className="yt-badge">YouTube</span>
          </button>
        )}
      </div>

      <div className="hero-video-cta">
        <a className="btn-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
          Agendar Reunión Estratégica
        </a>
        <p className="hero-foot">Sin compromisos · Sin spam · Solo claridad para tu negocio</p>
      </div>
    </section>
  );
}

function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    city: "",
    email: "",
    users: "",
  });

  const message = useMemo(
    () =>
      [
        "Hola, me interesó conocer más de Ruta Empresarial:",
        "",
        `Nombre: ${form.name || "N/A"}`,
        `Celular: ${form.phone || "N/A"}`,
        `Empresa: ${form.company || "N/A"}`,
        `Ciudad: ${form.city || "N/A"}`,
        `Usuarios: ${form.users || "N/A"}`,
        "",
        "Me gustaría conocer más sobre Ruta Empresarial ERP.",
      ]
        .filter(Boolean)
        .join("\n"),
    [form]
  );

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="form-section gated" id="contacto">
      <form className="form-card" onSubmit={onSubmit}>
        <span className="form-badge">Contacto directo</span>
        <h2>Cuéntanos sobre tu negocio</h2>
        <p>Déjanos tus datos y un consultor te contactará para revisar cómo Ruta Empresarial puede ayudarte.</p>
        <div className="form-grid">
          <input required placeholder="Nombre *" value={form.name} onChange={(e) => update("name", e.target.value)} />
          <input required placeholder="Celular / WhatsApp *" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          <input className="full" placeholder="Nombre del negocio / empresa (opcional)" value={form.company} onChange={(e) => update("company", e.target.value)} />
          <input placeholder="Ciudad (opcional)" value={form.city} onChange={(e) => update("city", e.target.value)} />
          <input type="email" placeholder="Email (opcional)" value={form.email} onChange={(e) => update("email", e.target.value)} />
          <select className="full" value={form.users} onChange={(e) => update("users", e.target.value)}>
            <option value="">¿Cuántos usuarios tendría el sistema?</option>
            <option>1 a 5 usuarios</option>
            <option>5 a 20 usuarios</option>
            <option>Más de 20 usuarios</option>
          </select>
          <button className="btn-wa full" type="submit">
            Enviar y continuar por WhatsApp
          </button>
        </div>
        <p className="form-privacy">Tus datos están seguros. No hacemos spam.</p>
      </form>
    </section>
  );
}

function FirstCta() {
  return (
    <section className="cta1 gated" id="cta1">
      <div className="cta1-inner">
        <h2>¿Quieres entender cómo Ruta Empresarial puede funcionar para tu negocio?</h2>
        <p>Agenda una reunión estratégica y revisamos si tu empresa necesita POS, ERP contable o una implementación a la medida.</p>
        <div className="cta1-btns">
          <a className="btn-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Agendar Reunión Estratégica
          </a>
          <a
            className="btn-outline-wa"
            href={whatsappLink("Hola, vi la página web de Ruta Empresarial y me interesa conocer más sobre la herramienta.")}
            target="_blank"
            rel="noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section className="product gated" id="producto">
      <div className="product-inner">
        <div className="modules-head">
          <span className="section-eyebrow">POS / ERP · Software</span>
          <h2>Todo lo que necesitas para operar tu empresa</h2>
          <p>Una plataforma accesible desde internet, utilizada por más de 1.800 empresas en Colombia, con más de 40 años de desarrollo.</p>
        </div>

        <div className="modules">
          {modules.map((item) => (
            <article className="mod" key={item.title}>
              <div className="mod-ico">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="demo-banner">
          <div>
            <h3>¿Quieres ver cómo funciona en tu negocio?</h3>
            <p>Agenda una demo gratuita y te mostramos el sistema en vivo.</p>
          </div>
          <a className="btn-demo" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Agendar Demo Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}

function PlanList({ sections }: { sections: { title: string; items: string[] }[] }) {
  return (
    <>
      {sections.map((section) => (
        <div className="plan-block" key={section.title}>
          <h4>{section.title}</h4>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function PlansSection() {
  return (
    <section className="plans gated" id="planes">
      <div className="plans-head">
        <span className="section-eyebrow">Planes y Precios</span>
        <h2>POS / ERP CON RUTA EMPRESARIAL</h2>
        <p>Elige el plan que mejor se adapte al tamaño y necesidades de tu empresa.</p>
      </div>

      <div className="plans-grid">
        <article className="plan featured">
          <div className="plan-pop">Más popular</div>
          <div className="plan-name">POS / ERP contable con Ruta Empresarial</div>
          <div className="plan-price">$950.000</div>
          <div className="plan-period">/mensuales · hasta 5 usuarios</div>
          <div className="plan-div" />
          <PlanList sections={standardPlan} />
          <a className="plan-cta" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Agendar Reunión Estratégica
          </a>
          <p className="plan-notes">Servicio excluido de IVA · Software en modalidad arriendo de licencia · Sin permanencia mínima</p>
        </article>

        <article className="plan plan-dark">
          <div className="plan-name">Plan para Empresas en Crecimiento</div>
          <div className="plan-price">
            Adaptado a
            <br />
            tu operación
          </div>
          <div className="plan-period">Precio según usuarios, módulos y escala</div>
          <div className="plan-div" />
          <PlanList sections={growthPlan} />
          <a
            className="plan-cta"
            href={whatsappLink("Hola, vengo de la página web de Ruta Empresarial, me interesa el plan para empresas en crecimiento y adaptado a mi operación.")}
            target="_blank"
            rel="noreferrer"
          >
            Hablemos de tu caso
          </a>
          <p className="plan-notes">Sin permanencia mínima · Cotización sin costo</p>
        </article>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testi gated">
      <div className="testi-head">
        <span className="section-eyebrow">Los empresarios confían en nosotros</span>
        <h2>Resultados reales en negocios reales</h2>
        <p>Más de 1.800 empresas en Colombia ya trabajan con este sistema.</p>
      </div>

      <div className="testi-grid">
        {testimonials.map((item) => (
          <article className="tcard" key={item.author}>
            <div className="tcard-stars">★★★★★</div>
            <p className="tcard-text">«{item.quote}»</p>
            <div className="tcard-author">
              <strong>
                {item.author} — {item.role}
              </strong>
              <span>{item.place}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final gated">
      <div className="final-inner">
        <h2>
          ¿Listo para dirigir tu negocio
          <br />
          con <em>claridad y estructura?</em>
        </h2>
        <p>Agenda una reunión estratégica con nuestro equipo y descubre cómo Ruta Empresarial puede transformar la gestión de tu empresa.</p>
        <div className="final-btns">
          <a className="btn-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Agendar Reunión Estratégica
          </a>
          <a
            className="btn-sec"
            href={whatsappLink("Hola, vi la página web de Ruta Empresarial y me interesa conocer más sobre la herramienta.")}
            target="_blank"
            rel="noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer gated">
      <div className="footer-brand">
        POS / ERP CON <em>RUTA EMPRESARIAL</em>
      </div>
      <div className="footer-tag">comercial@somicsoluciones.com · +57 317 651 4902</div>
      <nav className="footer-links" aria-label="Navegación de pie de página">
        <a href="#inicio">Inicio</a>
        <a href="#producto">Módulos POS / ERP</a>
        <a href="#planes">Planes y Precios</a>
        <a href="#cta1">Conoce Ruta Empresarial</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div className="footer-bottom">© 2026 Ruta Empresarial ERP. Todos los derechos reservados.</div>
    </footer>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const progress = Math.min(Math.round((elapsed / VSL_SECONDS) * 100), 100);

  useEffect(() => {
    if (!videoPlaying || unlocked) return undefined;

    const timer = window.setInterval(() => {
      setElapsed((current) => {
        const next = current + 1;
        if (next >= VSL_SECONDS) {
          setUnlocked(true);
        }
        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [videoPlaying, unlocked]);

  function watchVideo() {
    setVideoPlaying(true);
  }

  function unlockContent() {
    setUnlocked(true);
  }

  return (
    <div className={`app-shell ${unlocked ? "" : "vsl-locked"}`}>
      <Header />
      <Hero onVideoClick={watchVideo} videoPlaying={videoPlaying} />
      <UnlockBanner unlocked={unlocked} progress={progress} onUnlock={unlockContent} />
      <LeadForm />
      <FirstCta />
      <ModulesSection />
      <PlansSection />
      <TestimonialsSection />
      <FinalCta />
      <Footer />
    </div>
  );
}
