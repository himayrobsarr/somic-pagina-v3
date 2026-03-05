import React, { useEffect, useState } from "react";
import logoSomic from "./assets/SOMIC-01.png";
import whatsappLogo from "./assets/whatsapp.png";
import useEmblaCarousel from "embla-carousel-react";

type ModuleKey =
  | "inventarios"
  | "clientes"
  | "proveedores"
  | "facturacion"
  | "pos"
  | "contabilidad"
  | "nomina";

type ModuleItem = { key: ModuleKey; title: string; desc: string };

type Plan = {
  name: string;
  priceCOP: number;
  periodLabel: string;
  scope: string[];
  options: string[];
  extraInfo: string;
  routePack?: string[];
};

type Testimonial = { quote: string; author: string; city?: string };

const BRAND = {
  companyName: "Somic Soluciones S.A.S",
  productName: "FICC POS",
  nameMain: "FICC POS",
  nameTop: "FICC POS",
  siteUrl: "https://somic.world",
  whatsapp: "3163576348",
  phone: "3157603419",
  email: "ventas@tudominio.com",
  demoUrl: "http://103.30.17.66:8080/MantisFiccDemo/ficc.login",
  colors: {
    primary: "#0066FF",
    secondary: "#3498DB",
    dark: "#1A5276",
    yellow: "#FFD700",
    whatsapp: "#25D366",
    grayText: "#666666",
    lightGray: "#F5F5F5",
  },
};
// TODO: Pega aquí el enlace de YouTube: "FICC en acción"

function onlyDigits(s: string) {
  return (s || "").replace(/\D/g, "");
}

function waLink(number: string, text?: string) {
  const n = onlyDigits(number);
  const msg = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/57${n}${msg}`;
}

function moneyCOP(n: number) {
  return n.toLocaleString("es-CO", { maximumFractionDigits: 0 });
}

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/* ------------------------- DATA ------------------------- */

const NAV = [
  { label: "INICIO", href: "#inicio" },
  { label: "PLANES Y PRECIOS", href: "#planes" },
  { label: "MÓDULOS", href: "#modulos" },
  { label: "DEMO", href: "#demo" },
  { label: "CONTACTO", href: "#contacto" },
] as const;

const MODULES: ModuleItem[] = [
  {
    key: "inventarios",
    title: "INVENTARIOS",
    desc:
      "Controla en tiempo real el stock de tus productos, gestiona precios, ajustes, traslados y movimientos de kárdex, con consultas de saldos y existencias, y reportes valorizados para una toma de decisiones precisa y eficiente.",
  },
  {
    key: "clientes",
    title: "MÓDULO DE CLIENTES",
    desc:
      "Crea y gestiona clientes fácilmente, genera recibos de caja en segundos, utiliza cliente rápido para agilizar ventas y mantén bajo control tu cartera general en tiempo real.",
  },
  {
    key: "proveedores",
    title: "PROVEEDORES",
    desc:
      "Ciclo completo de compras, desde la administración de proveedores hasta órdenes de compra, remisiones, devoluciones y actas de recepción, con control de cartera y reportes de rotación.",
  },
  {
    key: "facturacion",
    title: "MÓDULO DE FACTURACIÓN",
    desc:
      "Gestiona las ventas, desde cotizaciones y pedidos hasta remisiones, facturación electrónica y notas crédito/débito, con control de devoluciones y análisis de rentabilidad general.",
  },
  {
    key: "pos",
    title: "MÓDULO DE POS",
    desc:
      "Administra el punto de venta con gestión de cajas, turnos y arqueos, facturación ágil, descuentos programados y control completo de domicilios con asignación de domiciliarios y rutas de entrega.",
  },
  {
    key: "contabilidad",
    title: "CONTABILIDAD",
    desc:
      "Proceso contable completo: configuración del PUC y centros de costos, comprobantes, libros contables y estados financieros, con soporte para información exógena y reportes de balance general, estado de resultados y mayor y balance.",
  },
  {
    key: "nomina",
    title: "NÓMINA",
    desc:
      "Ciclo completo del talento humano: contratos, novedades y ausentismos, liquidación de nómina, prestaciones sociales y cesantías, con soporte para nómina electrónica y contabilización automática.",
  },
];

const PLANS: Plan[] = [
  {
    name: "POS MENSUAL con Ruta Empresarial",
    priceCOP: 154500,
    periodLabel: "mensuales",
    scope: [
      "5 usuarios",
      "Plataforma de capacitación con evaluaciones programadas",
      "Acceso al software por internet",
      "Garantía de funcionabilidad",
      "Soporte de funcionabilidad",
      "Incluye 1.000 facturas POS electrónicas sin costo adicional*",
    ],
    options: [
      "Cotizaciones",
      "Pedidos",
      "Remisiones venta",
      "Devolución remisiones venta",
      "Factura",
      "Nota crédito",
      "Nota débito",
      "Suite electrónico",
    ],
    extraInfo:
      "Este plan se debe adquirir mínimo por 3 meses. La firma digital no está incluida y genera un costo adicional. Servicio excluido de IVA. El software se arrienda y vende “como es”. Los planes no tienen permanencia.",
    routePack: [
      "Principios y conceptos del modelo empresarial de éxito",
      "Diagnóstico",
      "Estrategia de acción inicial",
      "Optimización de la implementación del POS",
    ],
  },
  {
    name: "POS + INVENTARIOS con Ruta Empresarial",
    priceCOP: 219400,
    periodLabel: "mensuales",
    scope: [
      "5 usuarios",
      "Plataforma de capacitación con evaluaciones programadas",
      "Acceso al software por internet",
      "Garantía de funcionabilidad",
      "Soporte de funcionabilidad",
      "Incluye 1.000 facturas POS electrónicas sin costo adicional*",
      "Todo lo del plan POS",
    ],
    options: [
      "Artículos",
      "Precios",
      "Ajuste inventario",
      "Traslados",
      "Kárdex",
      "Consulta saldo (básica precios)",
      "Valorizado de inventario",
      "Consulta básica existencia",
      "Reportes",
    ],
    extraInfo:
      "Este plan se debe adquirir mínimo por 3 meses. La firma digital no está incluida y genera un costo adicional. Servicio excluido de IVA. El software se arrienda y vende “como es”. Los planes no tienen permanencia.",
    routePack: [
      "Principios y conceptos del modelo empresarial de éxito",
      "Diagnóstico",
      "Estrategia de acción inicial",
      "Optimización de la implementación del POS",
    ],
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Con FICC ERP logramos digitalizar toda la operación y centralizar la información en una sola plataforma. Hoy controlamos en tiempo real nuestros puntos de dispensación. Reducimos errores, mejoramos la atención y ganamos control para seguir creciendo con orden y eficiencia.",
    author: "Julio César Ardila — Director de Calidad, Discolmedica",
    city: "Neiva, Colombia",
  },
  {
    quote:
      "Antes teníamos pérdidas de mercancía que no podíamos explicar. Desde que implementamos FICC ERP POS, controlamos el inventario en tiempo real, eliminamos el robo hormiga y dejamos de hacer pedidos innecesarios. En menos de seis meses nuestra rentabilidad creció más del 30%.",
    author: "Paola León — Administradora, Supermercado Leoncitos",
    city: "Cúcuta, Colombia",
  },
  {
    quote:
      "Llevamos más de 30 años trabajando con el ERP y sistema POS… El control de domiciliarios a través de la aplicación nos permitió hacer seguimiento en tiempo real a cada entrega… La agilidad en la facturación marcó una diferencia enorme en la calidad del servicio.",
    author: "Marco Tulio Jiménez — Representante Legal, Droguería El Lago",
    city: "Bucaramanga, Colombia",
  },
  {
    quote:
      "Desde que implementamos FICC ERP, tenemos un control total de nuestra bodega, los despachos y el inventario… La facturación se volvió mucho más ágil y precisa. Hoy sabemos en todo momento qué tenemos en stock y cómo está nuestra rentabilidad.",
    author: "Oscar Uribe — Representante Legal, Confecciones Julis",
    city: "Colombia",
  },
];

/* ------------------------- UI PIECES ------------------------- */

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">
        {title}
      </h2>
      <div
        className="mx-auto mt-3 h-1 w-16 rounded-full"
        style={{ background: BRAND.colors.secondary }}
      />
      {subtitle ? (
        <p className="mt-4 text-neutral-700 max-w-3xl mx-auto">{subtitle}</p>
      ) : null}
    </div>
  );
}

function TopBar() {
  return (
    <div className="w-full bg-neutral-50 border-b text-neutral-700">
      <div className="mx-auto max-w-6xl px-4 py-2 text-sm flex flex-wrap items-center justify-between gap-2">
        <div>
          ¿Necesitas más información? → WhatsApp:{" "}
          <span className="font-semibold">{BRAND.whatsapp}</span> o Llámanos:{" "}
          <span className="font-semibold">{BRAND.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="underline underline-offset-4"
            href={waLink(BRAND.whatsapp, `Hola, quiero info de ${BRAND.nameMain}`)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <span className="text-neutral-400">|</span>
          <a
            className="underline underline-offset-4"
            href={`tel:+57${onlyDigits(BRAND.phone)}`}
          >
            Llamar
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logoSomic}
            alt={BRAND.nameMain}
            className="h-12 w-auto rounded-xl object-contain bg-white"
          />
          <div className="leading-tight">
            <div
              className="text-lg font-extrabold tracking-tight"
              style={{ color: BRAND.colors.primary }}
            >
              {BRAND.nameTop}
            </div>
            <div className="text-xs text-neutral-600 -mt-0.5">
              ERP + POS en la nube
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-3">
          {NAV.map((it, idx) => (
            <React.Fragment key={it.href}>
              <a
                href={it.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
                style={{ scrollMarginTop: 92 }}
              >
                {it.label}
              </a>
              {idx !== NAV.length - 1 ? (
                <span className="text-neutral-300">|</span>
              ) : null}
            </React.Fragment>
          ))}
        </nav>

        <div className="flex items-center gap-2">
  <a
    href={BRAND.demoUrl}
    target="_blank"
    rel="noreferrer"
    className="hidden sm:inline-flex rounded-xl px-3 py-2 text-sm font-semibold text-white"
    style={{ background: BRAND.colors.secondary }}
  >
    PROBAR EN VIVO
  </a>
</div>
      </div>
    </header>
  );
}

function ModuleIcon({ k }: { k: ModuleKey }) {
  // Iconos simples (inline SVG). Sin libs.
  const common = "h-6 w-6";
  const color = "text-white";

  switch (k) {
    case "inventarios":
      return (
        <svg className={cx(common, color)} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7h16M6 7v14h12V7M9 7V4h6v3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "clientes":
      return (
        <svg className={cx(common, color)} viewBox="0 0 24 24" fill="none">
          <path
            d="M16 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-12 9c1.5-3 5-5 8-5s6.5 2 8 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "proveedores":
      return (
        <svg className={cx(common, color)} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 17h2l2-8h10l2 8h2M7 9l1-4h8l1 4M6 17a2 2 0 1 0 4 0m8 0a2 2 0 1 0 4 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "facturacion":
      return (
        <svg className={cx(common, color)} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 3h10v18l-2-1l-3 1l-3-1l-2 1V3Zm2 5h6M9 12h6M9 16h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pos":
      return (
        <svg className={cx(common, color)} viewBox="0 0 24 24" fill="none">
          <path
            d="M6 6h12v5H6V6Zm0 8h12v5H6v-5Zm3-6h2m-2 10h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "contabilidad":
      return (
        <svg className={cx(common, color)} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 19V5h16v14H4Zm4-10h8M8 13h8M8 17h5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "nomina":
      return (
        <svg className={cx(common, color)} viewBox="0 0 24 24" fill="none">
          <path
            d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0ZM4 21c1.5-4 5-6 8-6s6.5 2 8 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function LeadForm() {
  const [form, setForm] = useState({
    nombre: "",
    negocio: "",
    ciudad: "",
    celular: "",
    email: "",
    plan: "POS MENSUAL",
    mensaje: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const text =
      `Hola, quiero cotizar ${BRAND.nameMain}.%0A%0A` +
      `Nombre: ${form.nombre}%0A` +
      `Negocio: ${form.negocio || "N/A"}%0A` +
      `Ciudad: ${form.ciudad || "N/A"}%0A` +
      `Celular: ${form.celular}%0A` +
      `Email: ${form.email || "N/A"}%0A` +
      `Plan: ${form.plan}%0A` +
      `Mensaje: ${form.mensaje || "N/A"}`;

    window.open(waLink(BRAND.whatsapp, text.replace(/%0A/g, "\n")), "_blank");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-6 shadow-xl border"
    >
      <div className="text-sm font-extrabold text-neutral-900">
        Cotiza tu plan aquí
      </div>
      <p className="mt-1 text-sm text-neutral-600">
        Déjanos tus datos y te contactamos por WhatsApp.
      </p>

      <div className="mt-4 grid gap-3">
        <input
          className="h-11 rounded-xl border px-4"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => update("nombre", e.target.value)}
          required
        />
        <input
          className="h-11 rounded-xl border px-4"
          placeholder="Negocio / Empresa (opcional)"
          value={form.negocio}
          onChange={(e) => update("negocio", e.target.value)}
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            className="h-11 rounded-xl border px-4"
            placeholder="Ciudad (opcional)"
            value={form.ciudad}
            onChange={(e) => update("ciudad", e.target.value)}
          />
          <input
            className="h-11 rounded-xl border px-4"
            placeholder="Celular"
            value={form.celular}
            onChange={(e) => update("celular", e.target.value)}
            required
          />
        </div>
        <input
          className="h-11 rounded-xl border px-4"
          placeholder="Email (opcional)"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
        <select
          className="h-11 rounded-xl border px-4 bg-white"
          value={form.plan}
          onChange={(e) => update("plan", e.target.value)}
        >
          <option value="POS MENSUAL">POS MENSUAL</option>
          <option value="POS + INVENTARIOS">POS + INVENTARIOS</option>
        </select>
        <textarea
          className="min-h-[90px] rounded-xl border px-4 py-3"
          placeholder="Mensaje (opcional)"
          value={form.mensaje}
          onChange={(e) => update("mensaje", e.target.value)}
        />

        <button
          type="submit"
          className="h-11 rounded-2xl font-extrabold text-white"
          style={{ background: BRAND.colors.dark }}
        >
          Enviar y cotizar por WhatsApp
        </button>
      </div>
    </form>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden scroll-mt-24"
      style={{ background: BRAND.colors.primary }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-white/15 text-white">
            <span className="opacity-90">Sistema integrado</span>
            <span className="opacity-60">•</span>
            <span className="opacity-90">Contabilidad + ERP</span>
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Sistema POS para negocios y{" "}
            <span style={{ color: BRAND.colors.yellow }}>pequeñas empresas</span>
          </h1>

          <p className="mt-4 text-white/90 text-lg leading-relaxed">
            Gestiona ventas, inventario, compras y contabilidad en una sola
            plataforma. Controla tu negocio en tiempo real, atiende más rápido y
            toma decisiones basadas en datos precisos.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#planes"
              className="rounded-2xl px-5 py-3 font-extrabold text-neutral-900"
              style={{ background: BRAND.colors.yellow }}
            >
              VER PLANES
            </a>
            <a
              href={BRAND.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-5 py-3 font-extrabold bg-white text-neutral-900"
            >
              VER DEMO
            </a>
          </div>

          <div className="mt-6 text-white/80 text-sm">
            Nuestro Sistema POS está integrado con la contabilidad y todos los
            módulos del ERP.
          </div>
        </div>

        {/* Right = Form (Bloque 1) */}
        <div className="relative">
          <LeadForm />
          <div
            className="mt-6 inline-flex -rotate-6 rounded-2xl px-4 py-2 font-extrabold text-neutral-900"
            style={{ background: BRAND.colors.yellow }}
          >
            ¡PRECIOS 2026 DISPONIBLES!
          </div>
        </div>
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section id="planes" className="mx-auto max-w-6xl px-4 py-14 scroll-mt-24">
      <SectionTitle
        title="Planes y precios"
        subtitle="Este es el segundo bloque. Elige el plan según tu operación (POS o POS + Inventarios). Cotizamos por WhatsApp."
      />

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {PLANS.map((p) => (
          <div key={p.name} className="rounded-3xl border p-7 shadow-sm bg-white">
            <div className="text-sm font-bold text-neutral-600">{p.name}</div>

            <div className="mt-2 flex items-end gap-2">
              <div
                className="text-4xl font-extrabold"
                style={{ color: BRAND.colors.primary }}
              >
                ${moneyCOP(p.priceCOP)}
              </div>
              <div className="text-neutral-500 pb-1">/{p.periodLabel}</div>
            </div>

            <div className="mt-6">
              <div className="text-xs font-extrabold tracking-widest text-neutral-500">
                ALCANCE DEL PLAN
              </div>
              <ul className="mt-3 space-y-2 text-neutral-700">
                {p.scope.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      className="mt-1 h-2 w-2 rounded-full"
                      style={{ background: BRAND.colors.secondary }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <div className="text-xs font-extrabold tracking-widest text-neutral-500">
                OPCIONES
              </div>
              <div className="mt-3">
                {p.name.includes("POS + INVENTARIOS") && (
                  <p className="text-sm text-neutral-700 italic">
                    Todas las del plan POS y adicionalmente:
                  </p>
                )}
<ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-neutral-700">
  {p.options.map((o) => (
    <li key={o} className="flex gap-2 items-start">
      <span
        className="mt-[6px] h-1.5 w-1.5 rounded-full flex-shrink-0"
        style={{ background: BRAND.colors.secondary }}
      />
      <span className="text-sm leading-snug">{o}</span>
    </li>
  ))}
</ul>
              </div>
            </div>

            {p.routePack?.length ? (
              <div className="mt-6 rounded-2xl border bg-neutral-50 p-4">
                <div className="text-xs font-extrabold tracking-widest text-neutral-500">
                  RUTA EMPRESARIAL (INCLUIDA)
                </div>
                <ul className="mt-3 space-y-2 text-neutral-700">
                  {p.routePack.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-1 h-2 w-2 rounded-full"
                        style={{ background: BRAND.colors.dark }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-5 text-sm text-neutral-500">{p.extraInfo}</div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink(
                  BRAND.whatsapp,
                  `Hola, quiero cotizar el plan: ${p.name}`
                )}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-4 py-3 font-extrabold text-white"
                style={{ background: BRAND.colors.secondary }}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ModulesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section
      id="modulos"
      className="bg-neutral-50 border-y scroll-mt-24"
      style={{ background: BRAND.colors.lightGray }}
    >
      <div className="mx-auto max-w-5xl px-4 py-14">
        <SectionTitle
          title="Módulos y funcionalidades"
          subtitle="Este es el tercer bloque: módulos con sus iconos."
        />

        {/* Carrusel solo en mobile/tablet */}
        <div className="mt-8 relative md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {MODULES.map((m) => (
                <div
                  key={m.key}
                  className="flex-[0_0_85%] rounded-3xl bg-white border p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="h-12 w-12 rounded-2xl flex items-center justify-center"
                      style={{ background: BRAND.colors.secondary }}
                      aria-hidden="true"
                    >
                      <ModuleIcon k={m.key} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-extrabold text-neutral-900">
                        {m.title}
                      </div>
                      <div className="mt-2 text-neutral-700 leading-relaxed">
                        {m.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full border bg-white shadow-md text-neutral-700 hover:bg-neutral-50"
            aria-label="Ver módulos anteriores"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full border bg-white shadow-md text-neutral-700 hover:bg-neutral-50"
            aria-label="Ver más módulos"
          >
            ›
          </button>
        </div>

        {/* Grid más ordenado en desktop */}
        <div className="mt-10 hidden md:grid md:grid-cols-2 gap-6">
          {MODULES.map((m) => (
            <div
              key={m.key}
              className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-md"
            >
              <div className="flex items-start gap-3">
                <div
                  className="h-12 w-12 rounded-2xl flex items-center justify-center"
                  style={{ background: BRAND.colors.secondary }}
                  aria-hidden="true"
                >
                  <ModuleIcon k={m.key} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-neutral-900">
                    {m.title}
                  </div>
                  <div className="mt-2 text-neutral-700 leading-relaxed">
                    {m.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA de cierre para completar la cuadrícula */}
          <div className="rounded-3xl bg-neutral-900 text-white p-7 shadow-md md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm font-extrabold tracking-wide">
                ¿Quieres ver más detalles de los módulos?
              </div>
              <p className="mt-2 text-sm text-white/80 max-w-xl">
                Te mostramos cómo se ve {BRAND.nameMain} funcionando con tu tipo de negocio
                y resolvemos todas tus dudas en una sesión rápida.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={waLink(
                  BRAND.whatsapp,
                  `Hola, quiero más detalles de los módulos de ${BRAND.nameMain}`
                )}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-5 py-3 text-sm font-extrabold text-neutral-900"
                style={{ background: BRAND.colors.yellow }}
              >
                Hablar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="rounded-2xl px-5 py-3 text-sm font-extrabold border border-white/40 text-white"
              >
                Ver datos de contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section
      id="demo"
      className="text-white scroll-mt-24"
      style={{
        background: `linear-gradient(90deg, ${BRAND.colors.primary}, ${BRAND.colors.secondary})`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Demo – Prueba gratis
          </h2>
          <p className="mt-3 text-white/90 leading-relaxed">
            Descubre la experiencia de navegar el sistema {BRAND.nameMain}:
            explora módulos, revisa reportes en tiempo real y mira cómo cada área
            de tu negocio puede trabajar conectada y bajo control.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={BRAND.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-5 py-3 font-extrabold text-neutral-900 bg-white"
            >
              VER DEMO
            </a>
          </div>
        </div>

        {/* Placeholder video (solo espacio por ahora) */}
        <div className="w-full">
          <div className="rounded-3xl border border-white/25 bg-white/10 overflow-hidden shadow-lg">
            <div className="aspect-video w-full flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-sm font-extrabold tracking-wide">
                  ESPACIO PARA VIDEO
                </div>
                <div className="mt-2 text-sm text-white/80">
                  Aquí irá un video de YouTube (próximamente).
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 text-xs text-white/70">
            Recomendación: video en formato 16:9 (YouTube).
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-neutral-50 border-y">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Los empresarios confían en nosotros" />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white border p-7 shadow-sm"
            >
              <div className="text-sm text-neutral-500">⭐⭐⭐⭐⭐</div>
              <p className="mt-4 text-neutral-800 leading-relaxed">
                “{t.quote}”
              </p>
              <div
                className="mt-5 font-extrabold"
                style={{ color: BRAND.colors.primary }}
              >
                {t.author}
              </div>
              {t.city ? (
                <div className="text-sm text-neutral-500 mt-1">{t.city}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-3xl border p-10 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              `radial-gradient(circle at 20% 20%, ${BRAND.colors.primary} 0, transparent 35%), ` +
              `radial-gradient(circle at 80% 30%, ${BRAND.colors.secondary} 0, transparent 40%), ` +
              `radial-gradient(circle at 50% 90%, ${BRAND.colors.yellow} 0, transparent 45%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <h2
            className="text-2xl md:text-3xl font-extrabold"
            style={{ color: BRAND.colors.primary }}
          >
            ¿Ya tienes tu negocio? Empieza aquí
          </h2>
          <p className="mt-3 text-neutral-700">
            Controla tu punto de venta desde la nube con {BRAND.nameMain}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink(
                BRAND.whatsapp,
                `Hola, quiero empezar con ${BRAND.nameMain}`
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-5 py-3 font-extrabold text-white"
              style={{ background: BRAND.colors.dark }}
            >
              Comenzar
            </a>
            <a
              href="#planes"
              className="rounded-2xl px-5 py-3 font-extrabold border"
            >
              Ver planes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Content = () => (
    <div>
      <div className="text-xs uppercase tracking-wide text-white/70">{label}</div>
      <div className="text-sm font-medium text-white">{value}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block hover:text-white">
        <Content />
      </a>
    );
  }

  return <Content />;
}

function Footer() {
  return (
    <footer
      id="contacto"
      className="text-white scroll-mt-24"
      style={{ background: "#0066CC" }}
    >
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-14">
        <div>
          <div className="font-extrabold tracking-wide text-sm md:text-base">
            CONTACTO
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-x-10 md:gap-y-3 text-white/90">
            <ContactRow
              label="WhatsApp"
              value={BRAND.whatsapp}
              href={waLink(BRAND.whatsapp, `Hola, quiero info de ${BRAND.nameMain}`)}
            />

            <ContactRow
              label="PBX"
              value={`+57 ${BRAND.phone}`}
              href={`tel:+57${onlyDigits(BRAND.phone)}`}
            />

            <ContactRow
              label="Email"
              value={BRAND.email}
              href={`mailto:${BRAND.email}`}
            />

            <ContactRow
              label="Sede principal"
              value="Cr 23 # 19-43 Piso 2-3, Barrio San Francisco, Bucaramanga"
            />

            <ContactRow
              label="Sede comercial"
              value="Zona Franca – Campus land"
            />

            <ContactRow
              label="Horario"
              value="Lunes a Viernes: 8am - 5pm"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto max-w-6xl px-4 py-5 text-sm text-white/85">
          © {new Date().getFullYear()} {BRAND.nameMain}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons({
  showTop,
}: {
  showTop: boolean;
}) {
  return (
    <>
      <a
        href={waLink(BRAND.whatsapp, `Hola, quiero info de ${BRAND.nameMain}`)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 shadow-lg"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="h-12 w-12 object-contain"
        />
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cx(
          "fixed bottom-5 right-24 h-14 w-14 rounded-2xl shadow-lg flex items-center justify-center border transition-opacity",
          showTop ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        style={{ background: BRAND.colors.secondary, color: "white" }}
        aria-label="Ir arriba"
        title="Ir arriba"
      >
        ↑
      </button>
    </>
  );
}

/* ------------------------- APP ------------------------- */

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <TopBar />
      <Header />

      {/* Bloque 1: Hero + Formulario */}
      <Hero />

      {/* Bloque 2: Precios */}
      <PlansSection />

      {/* Bloque 3: Módulos con iconos */}
      <ModulesSection />

      {/* Resto */}
      <DemoSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />

      <FloatingButtons showTop={showTop} />
    </div>
  );
}