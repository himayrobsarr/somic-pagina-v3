import React, { useEffect, useMemo, useState } from "react";

type ModuleItem = { title: string; desc: string };
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
  nameTop: "FICC POS",
  nameMain: "FICC POS",
  whatsapp: "3163576348",
  phone: "3157603419",
  email: "ventas@tudominio.com", // TODO: cámbialo
  demoUrl: "", // TODO: cuando te lo den, pégalo aquí
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

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">
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

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl rounded-3xl bg-white shadow-xl border">
          <div className="p-6 border-b flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-bold tracking-widest text-neutral-500">
                DEMO
              </div>
              <div className="text-xl font-extrabold text-neutral-900">
                {title}
              </div>
            </div>
            <button
              className="h-10 w-10 rounded-xl border hover:bg-neutral-50"
              onClick={onClose}
              aria-label="Cerrar"
              title="Cerrar"
            >
              ✕
            </button>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const [demoModal, setDemoModal] = useState(false);

  const nav = useMemo(
    () => [
      { label: "INICIO", href: "#inicio" },
      { label: "MÓDULOS", href: "#modulos" },
      { label: "PLANES Y PRECIOS", href: "#planes" },
      { label: "DEMO", href: "#demo" },
      { label: "CONTACTO", href: "#contacto" },
    ],
    []
  );

  const modules: ModuleItem[] = useMemo(
    () => [
      {
        title: "INVENTARIOS",
        desc:
          "Controla en tiempo real el stock de tus productos, gestiona precios, ajustes, traslados y movimientos de kárdex, con consultas de saldos y existencias, y reportes valorizados para una toma de decisiones precisa y eficiente.",
      },
      {
        title: "MÓDULO DE CLIENTES",
        desc:
          "Crea y gestiona clientes fácilmente, genera recibos de caja en segundos, utiliza cliente rápido para agilizar ventas y mantén bajo control tu cartera general en tiempo real.",
      },
      {
        title: "PROVEEDORES",
        desc:
          "Ciclo completo de compras, desde la administración de proveedores hasta órdenes de compra, remisiones, devoluciones y actas de recepción, con control de cartera y reportes de rotación.",
      },
      {
        title: "MÓDULO DE FACTURACIÓN",
        desc:
          "Gestiona las ventas, desde cotizaciones y pedidos hasta remisiones, facturación electrónica y notas crédito/débito, con control de devoluciones y análisis de rentabilidad general.",
      },
      {
        title: "MÓDULO DE POS",
        desc:
          "Administra el punto de venta con gestión de cajas, turnos y arqueos, facturación ágil, descuentos programados y control completo de domicilios con asignación de domiciliarios y rutas de entrega.",
      },
      {
        title: "CONTABILIDAD",
        desc:
          "Proceso contable completo: configuración del PUC y centros de costos, comprobantes, libros contables y estados financieros, con soporte para información exógena y reportes de balance general, estado de resultados y mayor y balance.",
      },
      {
        title: "NÓMINA",
        desc:
          "Ciclo completo del talento humano: contratos, novedades y ausentismos, liquidación de nómina, prestaciones sociales y cesantías, con soporte para nómina electrónica y contabilización automática.",
      },
    ],
    []
  );

  const plans: Plan[] = useMemo(
    () => [
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
          "Todo lo del plan POS",
          "5 usuarios",
          "Plataforma de capacitación con evaluaciones programadas",
          "Acceso al software por internet",
          "Garantía de funcionabilidad",
          "Soporte de funcionabilidad",
          "Incluye 1.000 facturas POS electrónicas sin costo adicional*",
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
    ],
    []
  );

  const testimonials: Testimonial[] = useMemo(
    () => [
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
    ],
    []
  );

  const demoSteps = useMemo(
    () => [
      "Ingresa al demo desde el enlace (te lo compartirán).",
      "Usuario: admin",
      "Clave: mantisw*",
      "Explora módulos con datos de prueba: Inventarios → POS → Facturación → Reportes.",
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
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
            <a className="underline underline-offset-4" href={`tel:+57${onlyDigits(BRAND.phone)}`}>
              Llamar
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-xl"
              style={{ background: BRAND.colors.secondary }}
              aria-hidden="true"
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
            {nav.map((it, idx) => (
              <React.Fragment key={it.href}>
                <a
                  href={it.href}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
                  style={{ scrollMarginTop: 92 }}
                >
                  {it.label}
                </a>
                {idx !== nav.length - 1 ? (
                  <span className="text-neutral-300">|</span>
                ) : null}
              </React.Fragment>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDemoModal(true)}
              className="hidden sm:inline-flex rounded-xl px-3 py-2 text-sm font-semibold text-white"
              style={{ background: BRAND.colors.secondary }}
            >
              PROBAR EN VIVO
            </button>
            <a
              href="#planes"
              className="inline-flex rounded-xl px-3 py-2 text-sm font-semibold text-white"
              style={{ background: BRAND.colors.dark }}
            >
              COMPRAR
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative overflow-hidden"
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
        <div className="relative mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
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
              plataforma. Controla tu negocio en tiempo real, atiende más rápido
              y toma decisiones basadas en datos precisos.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#planes"
                className="rounded-2xl px-5 py-3 font-extrabold text-neutral-900"
                style={{ background: BRAND.colors.yellow }}
              >
                COTIZAR / COMPRAR
              </a>
              <button
                onClick={() => setDemoModal(true)}
                className="rounded-2xl px-5 py-3 font-extrabold bg-white text-neutral-900"
              >
                VER DEMO
              </button>
            </div>

            <div className="mt-6 text-white/80 text-sm">
              Nuestro Sistema POS está integrado con la contabilidad y todos los
              módulos del ERP.
            </div>
          </div>

          {/* Bloque visual tipo referencia */}
          <div className="relative">
            <div className="rounded-3xl bg-white/10 border border-white/20 p-6">
              <div className="text-white font-bold text-lg">Mockup / Imagen</div>
              <div className="mt-2 text-white/80 text-sm">
                Pega aquí un mockup del sistema o una foto tipo referencia.
                Si me pasas la imagen del hero, lo dejo 1:1.
              </div>
              <div
                className="mt-6 inline-flex -rotate-6 rounded-2xl px-4 py-2 font-extrabold text-neutral-900"
                style={{ background: BRAND.colors.yellow }}
              >
                ¡PRECIOS 2026 DISPONIBLES!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section id="modulos" className="bg-neutral-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            title="Módulos y funcionalidades"
            subtitle="Todo lo que necesitas para operar, controlar y crecer: POS, inventarios, compras, contabilidad y nómina."
          />

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => (
              <div key={m.title} className="rounded-3xl bg-white border p-6 shadow-sm">
                <div className="text-xs font-extrabold tracking-widest text-neutral-500">
                  {m.title}
                </div>
                <p className="mt-3 text-neutral-700 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          title="Planes y precios"
          subtitle="Elige el plan según tu operación (POS o POS + Inventarios). Cotizamos por WhatsApp."
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-3xl border p-7 shadow-sm">
              <div className="text-sm font-bold text-neutral-600">{p.name}</div>

              <div className="mt-2 flex items-end gap-2">
                <div className="text-4xl font-extrabold" style={{ color: BRAND.colors.primary }}>
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
                      <span className="mt-1 h-2 w-2 rounded-full" style={{ background: BRAND.colors.secondary }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="text-xs font-extrabold tracking-widest text-neutral-500">
                  OPCIONES
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.options.map((o) => (
                    <span
                      key={o}
                      className="text-sm px-3 py-1 rounded-full border bg-white"
                    >
                      {o}
                    </span>
                  ))}
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
                        <span className="mt-1 h-2 w-2 rounded-full" style={{ background: BRAND.colors.dark }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-5 text-sm text-neutral-500">{p.extraInfo}</div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={waLink(BRAND.whatsapp, `Hola, quiero cotizar el plan: ${p.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl px-4 py-3 font-extrabold text-white"
                  style={{ background: BRAND.colors.secondary }}
                >
                  Cotizar por WhatsApp
                </a>
                <button
                  onClick={() => setDemoModal(true)}
                  className="rounded-2xl px-4 py-3 font-extrabold border"
                >
                  Ver demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo */}
      <section
        id="demo"
        className="text-white"
        style={{
          background: `linear-gradient(90deg, ${BRAND.colors.primary}, ${BRAND.colors.secondary})`,
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Demo – Prueba gratis
            </h2>
            <p className="mt-3 text-white/90 leading-relaxed">
              Descubre la experiencia de navegar el sistema {BRAND.nameMain}:
              explora módulos, revisa reportes en tiempo real y mira cómo cada
              área de tu negocio puede trabajar conectada y bajo control.
            </p>
          </div>
          <div className="flex md:justify-end gap-3">
            <button
              onClick={() => setDemoModal(true)}
              className="rounded-2xl px-5 py-3 font-extrabold text-neutral-900 bg-white"
            >
              VER PASOS DEL DEMO
            </button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-neutral-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle title="Los empresarios confían en nosotros" />

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-3xl bg-white border p-7 shadow-sm">
                <div className="text-sm text-neutral-500">⭐⭐⭐⭐⭐</div>
                <p className="mt-4 text-neutral-800 leading-relaxed">“{t.quote}”</p>
                <div className="mt-5 font-extrabold" style={{ color: BRAND.colors.primary }}>
                  {t.author}
                </div>
                {t.city ? <div className="text-sm text-neutral-500 mt-1">{t.city}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: BRAND.colors.primary }}>
              ¿Ya tienes tu negocio? Empieza aquí
            </h2>
            <p className="mt-3 text-neutral-700">
              Controla tu punto de venta desde la nube con {BRAND.nameMain}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink(BRAND.whatsapp, `Hola, quiero empezar con ${BRAND.nameMain}`)}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-5 py-3 font-extrabold text-white"
                style={{ background: BRAND.colors.dark }}
              >
                Comenzar
              </a>
              <a href="#planes" className="rounded-2xl px-5 py-3 font-extrabold border">
                Ver planes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto / Footer */}
      <footer id="contacto" className="text-white" style={{ background: "#0066CC" }}>
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-extrabold tracking-wide">FICC POS</div>
            <p className="mt-3 text-white/85">
              Gestiona ventas, inventario, compras y contabilidad en una sola plataforma,
              con control en tiempo real.
            </p>
          </div>

          <div>
            <div className="font-extrabold tracking-wide">CONTACTO</div>
            <div className="mt-3 space-y-2 text-white/90">
              <div>💬 WhatsApp: {BRAND.whatsapp}</div>
              <div>📞 PBX: +57 {BRAND.phone}</div>
              <div>✉️ Email: {BRAND.email}</div>
              <div>📍 Sede principal: Cr 23 # 19-43 Piso 2-3, Barrio San Francisco, Bucaramanga</div>
              <div>📍 Sede comercial: Zona Franca – Campus land</div>
              <div>🕘 Lunes a Viernes: 8am - 5pm</div>
            </div>
          </div>

          <div>
            <div className="font-extrabold tracking-wide">ACCESOS</div>
            <div className="mt-3 space-y-2 text-white/90">
              <a className="underline underline-offset-4" href="#modulos">Módulos</a>
              <div className="opacity-60">—</div>
              <a className="underline underline-offset-4" href="#planes">Planes</a>
              <div className="opacity-60">—</div>
              <a className="underline underline-offset-4" href="#demo">Demo</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="mx-auto max-w-6xl px-4 py-5 text-sm text-white/85">
            © {new Date().getFullYear()} {BRAND.nameMain}. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={waLink(BRAND.whatsapp, `Hola, quiero info de ${BRAND.nameMain}`)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 h-14 w-14 rounded-full shadow-lg flex items-center justify-center"
        style={{ background: BRAND.colors.whatsapp }}
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <span className="text-white text-2xl font-extrabold">✆</span>
      </a>

      {/* Scroll to top */}
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

      {/* Demo modal */}
      <Modal
        open={demoModal}
        onClose={() => setDemoModal(false)}
        title="Pasos para usar el demo"
      >
        <div className="space-y-3 text-neutral-700">
          <p>
            Cuando te entreguen el link del demo, lo pegamos en <code className="px-2 py-1 bg-neutral-100 rounded">BRAND.demoUrl</code>.
            Mientras tanto, estos son los pasos:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            {demoSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href={waLink(BRAND.whatsapp, "Hola, quiero el acceso al demo de FICC POS")}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-4 py-3 font-extrabold text-white"
              style={{ background: BRAND.colors.dark }}
            >
              Pedir acceso por WhatsApp
            </a>
            <button
              onClick={() => setDemoModal(false)}
              className="rounded-2xl px-4 py-3 font-extrabold border"
            >
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}