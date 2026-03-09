export type ModuleKey =
  | "inventarios"
  | "clientes"
  | "proveedores"
  | "facturacion"
  | "pos"
  | "contabilidad"
  | "nomina";

export type ModuleItem = { key: ModuleKey; title: string; desc: string };

export type Plan = {
  name: string;
  priceCOP: number;
  periodLabel: string;
  scope: string[];
  options: string[];
  extraInfo: string;
  routePack?: string[];
};

export type Testimonial = { quote: string; author: string; city?: string };