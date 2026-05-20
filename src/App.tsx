import { useMemo, useState } from "react";
import logoRuta from "./assets/logo-ruta-empresarial-horizontal.png";
import "./App.css";

const CALENDLY_URL = "https://calendly.com/comercialsomic/30min";
const WHATSAPP_NUMBER = "573157603419";
const VIDEO_ID = "CyiwIC8laz8";

const modules = [
  {
    icon: "box",
    title: "Inventarios",
    text: "Control en tiempo real de productos, precios, ajustes, traslados, kardex y reconteos valorizados.",
  },
  {
    icon: "users",
    title: "Clientes",
    text: "Crea clientes, genera recibos de caja y mantén la cartera de tu negocio visible y organizada.",
  },
  {
    icon: "truck",
    title: "Proveedores",
    text: "Gestiona compras, órdenes, remisiones, devoluciones y reportes de rotación desde una sola plataforma.",
  },
  {
    icon: "receipt",
    title: "Facturación / POS",
    text: "Cotizaciones, pedidos, facturación electrónica, POS, notas crédito y transmisión directa a la DIAN.",
  },
  {
    icon: "chart",
    title: "Contabilidad",
    text: "PUC, comprobantes, libros, información exógena, centros de costos y estados financieros integrados.",
  },
  {
    icon: "wallet",
    title: "Cartera",
    text: "Cuentas por cobrar y pagar, vencimientos y reportes para proteger el flujo de caja.",
  },
];

const planOne = [
  "Hasta 5 usuarios simultáneos",
  "Capacitaciones con evaluaciones programadas",
  "Acceso al software por internet",
  "Garantía y soporte de funcionabilidad",
  "1.000 facturas POS + 200 documentos soporte/mes sin costo adicional",
  "Firma electrónica y servidor en la nube incluidos",
  "Ruta Empresarial incluida: diagnóstico, estrategia inicial y optimización de implementación",
];

const planGrowth = [
  "Más de 5 usuarios simultáneos",
  "Mayor volumen de facturación electrónica",
  "Módulos adicionales según tu operación",
  "Soporte prioritario según cotización",
  "Acompañamiento estratégico para empresas en crecimiento",
];

const testimonials = [
  {
    quote:
      "Con el POS / ERP logramos digitalizar toda la operación y centralizar la información en una sola plataforma. Hoy controlamos inventario, despachos y facturación en tiempo real.",
    author: "Julio César Ardila",
    role: "Director de Calidad",
    place: "Neiva, Colombia",
  },
  {
    quote:
      "Antes teníamos pérdidas de mercancía que no podíamos explicar. Desde que implementamos el POS / ERP controlamos el inventario en tiempo real y mejoramos la rentabilidad.",
    author: "Paula León",
    role: "Administradora",
    place: "Cúcuta, Colombia",
  },
  {
    quote:
      "El control de domicilios en tiempo real y el seguimiento al comportamiento del cliente nos dio una diferencia enorme en calidad del servicio.",
    author: "Marco Tulio Jiménez",
    role: "Representante Legal",
    place: "Bucaramanga, Colombia",
  },
  {
    quote:
      "Ahora tenemos control total de bodega, despachos e inventario. La facturación electrónica integrada con la DIAN nos da tranquilidad.",
    author: "Oscar Uribe",
    role: "Representante Legal",
    place: "Colombia",
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
      <a className="brand" href="#inicio" aria-label="Ruta Empresarial">
        <img src={logoRuta} alt="Ruta Empresarial con POS/ERP" />
      </a>
      <nav className="main-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#modulos">Módulos</a>
        <a href="#pos-erp">POS / ERP</a>
        <a href="#planes">Planes y Precios</a>
        <a className="nav-highlight" href="#video">
          Conoce Ruta Empresarial
        </a>
      </nav>
    </header>
  );
}

function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Acciones rápidas">
      <a href="#video">Ver video</a>
      <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
        Agendar
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow">POS / ERP con Ruta Empresarial</p>
          <h1>
            Tu negocio creció. Es hora de gestionarlo con{" "}
            <span>
              <strong>Ruta</strong>
              <strong>Empresarial</strong>
            </span>
          </h1>
          <p className="hero-copy">
            Tecnología, estructura y acompañamiento para que vendas, factures,
            controles inventario y tomes decisiones con información clara.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#video">
              Ver video
            </a>
            <a className="secondary-btn" href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Agendar reunión estratégica
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Resumen Ruta Empresarial">
          <div className="panel-video-mark">
            <span>Video VSL</span>
            <strong>5-6 min</strong>
          </div>
          <h2>Primero entiende la ruta. Luego eliges el plan.</h2>
          <p>
            Ve el video en la página y agenda una reunión para revisar tu caso
            con un asesor.
          </p>
          <div className="panel-steps">
            <span>Diagnóstico</span>
            <span>POS / ERP</span>
            <span>Estrategia</span>
          </div>
          <a className="panel-link" href="#video">
            Conoce Ruta Empresarial
          </a>
        </aside>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="video-layout">
        <div className="section-head light">
          <p className="eyebrow">Conoce Ruta Empresarial</p>
          <h2>Mira el video antes de elegir tu plan</h2>
          <p>
            La idea es que lo veas aquí mismo, sin salir a YouTube, y después
            puedas agendar una reunión con un asesor.
          </p>
          <div className="video-cta">
            <a className="primary-btn" href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Agendar reunión estratégica
            </a>
            <span>Sin compromisos. Revisamos tu caso y te orientamos.</span>
          </div>
        </div>
        <div className="video-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1`}
            title="Video Ruta Empresarial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
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
        "Hola, vengo de la página web de Ruta Empresarial y quiero más información.",
        `Nombre: ${form.name || "N/A"}`,
        `Celular: ${form.phone || "N/A"}`,
        `Empresa: ${form.company || "N/A"}`,
        `Ciudad: ${form.city || "N/A"}`,
        `Email: ${form.email || "N/A"}`,
        `Usuarios: ${form.users || "N/A"}`,
      ].join("\n"),
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
    <section className="contact-band" id="contacto">
      <form className="lead-form" onSubmit={onSubmit}>
        <div>
          <p className="eyebrow">Contacto directo</p>
          <h2>Cuéntanos sobre tu negocio</h2>
          <p>
            Déjanos tus datos y un consultor te contactará para revisar cómo
            Ruta Empresarial puede ayudarte.
          </p>
        </div>
        <div className="form-grid">
          <input required placeholder="Nombre" value={form.name} onChange={(e) => update("name", e.target.value)} />
          <input required placeholder="Celular / WhatsApp" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          <input className="full" placeholder="Nombre del negocio / empresa" value={form.company} onChange={(e) => update("company", e.target.value)} />
          <input placeholder="Ciudad" value={form.city} onChange={(e) => update("city", e.target.value)} />
          <input type="email" placeholder="Email" value={form.email} onChange={(e) => update("email", e.target.value)} />
          <select className="full" value={form.users} onChange={(e) => update("users", e.target.value)}>
            <option value="">¿Cuántos usuarios tendría el sistema?</option>
            <option>1 a 2 usuarios</option>
            <option>3 a 5 usuarios</option>
            <option>Más de 5 usuarios</option>
          </select>
          <button className="whatsapp-btn full" type="submit">
            Enviar y continuar por WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
}

function ModulesSection() {
  return (
    <section className="content-section" id="modulos">
      <div className="section-head">
        <p className="eyebrow">Módulos POS / ERP</p>
        <h2>Todo lo que necesitas para operar tu empresa</h2>
        <p>
          Una plataforma accesible desde internet, pensada para ordenar la
          operación diaria y conectar las áreas clave del negocio.
        </p>
      </div>
      <div className="module-grid">
        {modules.map((item) => (
          <article className="module-card" key={item.title}>
            <div className="icon-box">
              <Icon name={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PosErpSection() {
  return (
    <section className="split-section" id="pos-erp">
      <div>
        <p className="eyebrow">Software + acompañamiento</p>
        <h2>Ruta Empresarial no es solo un POS</h2>
        <p>
          Combina la operación del sistema con una ruta de diagnóstico,
          estrategia inicial y optimización para que la implementación tenga
          sentido en el día a día de tu empresa.
        </p>
      </div>
      <div className="proof-list">
        <div>
          <strong>1.800+</strong>
          <span>empresas han usado la plataforma en Colombia</span>
        </div>
        <div>
          <strong>40+</strong>
          <span>años de desarrollo y evolución del sistema</span>
        </div>
        <div>
          <strong>DIAN</strong>
          <span>facturación electrónica y documentos soporte integrados</span>
        </div>
      </div>
    </section>
  );
}

function PlansSection() {
  const [openPlans, setOpenPlans] = useState({
    standard: false,
    growth: false,
  });
  const standardPreview = planOne.slice(0, 3);
  const standardMore = planOne.slice(3);
  const growthPreview = planGrowth.slice(0, 3);
  const growthMore = planGrowth.slice(3);

  function togglePlan(plan: "standard" | "growth") {
    setOpenPlans((current) => ({
      ...current,
      [plan]: !current[plan],
    }));
  }

  return (
    <section className="plans-section" id="planes">
      <div className="section-head">
        <p className="eyebrow">Planes y Precios</p>
        <h2>POS / ERP con Ruta Empresarial</h2>
        <p>Elige el plan según el tamaño y las necesidades de tu empresa.</p>
      </div>
      <div className="plans-grid">
        <article className={`plan-card featured ${openPlans.standard ? "is-expanded" : ""}`}>
          <span className="plan-pill">Más popular</span>
          <h3>POS / ERP contable con Ruta Empresarial</h3>
          <div className="price">$950.000</div>
          <p className="period">mensuales · hasta 5 usuarios</p>
          <ul>
            {standardPreview.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={`plan-extra ${openPlans.standard ? "open" : ""}`}>
            <ul>
              {standardMore.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <button
            className="plan-toggle"
            type="button"
            onClick={() => togglePlan("standard")}
            aria-expanded={openPlans.standard}
          >
            <span>{openPlans.standard ? "Ver menos" : "Ver todo lo incluido"}</span>
            <span aria-hidden="true">{openPlans.standard ? "↑" : "↓"}</span>
          </button>
          <a className="primary-btn" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Agendar reunión estratégica
          </a>
          <p className="note">
            Servicio excluido de IVA. Software en arriendo de licencia. Sin
            permanencia mínima.
          </p>
        </article>
        <article className={`plan-card dark ${openPlans.growth ? "is-expanded" : ""}`}>
          <h3>Plan para empresas en crecimiento</h3>
          <div className="price">Adaptado a tu operación</div>
          <p className="period">Precio según usuarios, módulos y escala</p>
          <ul>
            {growthPreview.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={`plan-extra ${openPlans.growth ? "open" : ""}`}>
            <ul>
              {growthMore.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <button
            className="plan-toggle"
            type="button"
            onClick={() => togglePlan("growth")}
            aria-expanded={openPlans.growth}
          >
            <span>{openPlans.growth ? "Ver menos" : "Ver detalles"}</span>
            <span aria-hidden="true">{openPlans.growth ? "↑" : "↓"}</span>
          </button>
          <a
            className="primary-btn"
            href={whatsappLink(
              "Hola, vengo de la página web de Ruta Empresarial. Me interesa el plan para empresas en crecimiento."
            )}
            target="_blank"
            rel="noreferrer"
          >
            Hablemos de tu caso
          </a>
          <p className="note">Cotización sin costo. Sin permanencia mínima.</p>
        </article>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="content-section testimonials">
      <div className="section-head">
        <p className="eyebrow">Los empresarios confían en nosotros</p>
        <h2>Resultados reales en negocios reales</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.author}>
            <div className="stars">★★★★★</div>
            <p>“{item.quote}”</p>
            <strong>{item.author}</strong>
            <span>
              {item.role} · {item.place}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div>
        <h2>¿Listo para dirigir tu negocio con claridad y estructura?</h2>
        <p>
          Agenda una reunión estratégica y descubre cómo Ruta Empresarial puede
          transformar la gestión de tu empresa.
        </p>
        <div className="hero-actions centered">
          <a className="primary-btn" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Agendar reunión estratégica
          </a>
          <a
            className="secondary-btn"
            href={whatsappLink(
              "Hola, vengo de la página web de Ruta Empresarial y quiero más información."
            )}
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
    <footer className="footer">
      <strong>Ruta Empresarial ERP</strong>
      <span>comercialsomic@somic.com.co · +57 315 760 3419</span>
      <nav aria-label="Navegación de pie de página">
        <a href="#inicio">Inicio</a>
        <a href="#modulos">Módulos</a>
        <a href="#planes">Planes y Precios</a>
        <a href="#video">Conoce Ruta Empresarial</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <MobileActionBar />
      <Hero />
      <VideoSection />
      <LeadForm />
      <ModulesSection />
      <PosErpSection />
      <PlansSection />
      <TestimonialsSection />
      <FinalCta />
      <Footer />
    </div>
  );
}
