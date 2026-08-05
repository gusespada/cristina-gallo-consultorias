import Link from "next/link";

export function LegalContent({ title, children }: { title: string; children: React.ReactNode }) {
  return <main className="legal"><Link className="brand" href="/"><span className="brand-mark">CG</span><span><b>Cristina Gallo</b><small>Volver al inicio</small></span></Link><p className="eyebrow">Documento legal · Borrador</p><h1>{title}</h1><p className="placeholder-note">Este texto es un marcador de prototipo y debe ser revisado por un profesional competente antes de habilitar reservas o pagos reales.</p>{children}</main>;
}
