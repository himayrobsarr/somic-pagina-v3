export function onlyDigits(s: string) {
    return (s || "").replace(/\D/g, "");
  }
  
  export function waLink(number: string, text?: string) {
    const n = onlyDigits(number);
    const msg = text ? `?text=${encodeURIComponent(text)}` : "";
    return `https://wa.me/57${n}${msg}`;
  }
  
  export function moneyCOP(n: number) {
    return n.toLocaleString("es-CO", { maximumFractionDigits: 0 });
  }
  
  export function cx(...xs: Array<string | false | null | undefined>) {
    return xs.filter(Boolean).join(" ");
  }