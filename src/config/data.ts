import type { ModuleItem, Plan, Testimonial } from "../types";

export const NAV = [
  { label: "INICIO", href: "#inicio" },
  { label: "PLANES Y PRECIOS", href: "#planes" },
  { label: "MÓDULOS", href: "#modulos" },
  { label: "DEMO", href: "#demo" },
  { label: "CONTACTO", href: "#contacto" },
] as const;

export const MODULES: ModuleItem[] = [
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

export const PLANS: Plan[] = [
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

export const TESTIMONIALS: Testimonial[] = [
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