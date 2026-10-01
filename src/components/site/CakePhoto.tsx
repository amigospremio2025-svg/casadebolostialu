import { CakeSlice } from "lucide-react";

export function CakePhoto({ src, alt }: { src: string | null; alt: string }) {
  if (src) return <img src={src} width={1024} height={1024} loading="lazy" alt={alt} className="aspect-square w-full object-cover" />;
  return (
    <div className="flex aspect-square w-full flex-col items-center justify-center gap-3 border-b border-dashed border-primary/40 bg-secondary text-primary">
      <CakeSlice className="size-12" />
      <span className="font-display text-xl">Foto em breve</span>
    </div>
  );
}
