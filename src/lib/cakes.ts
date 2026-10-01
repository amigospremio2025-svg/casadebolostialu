import chocolate from "@/assets/bolo-chocolate.jpg";
import cenoura from "@/assets/bolo-cenoura.jpg";
import redVelvet from "@/assets/bolo-red-velvet.jpg";

export const cakes = [
  { name: "Bolo de Chocolate", description: "Massa úmida de chocolate, recheio cremoso e brigadeiro artesanal.", image: chocolate, tag: "Mais pedido" },
  { name: "Bolo de Cenoura", description: "Receita caseira, fofinha e coberta com uma generosa calda de chocolate.", image: cenoura, tag: "Sabor de infância" },
  { name: "Red Velvet", description: "Camadas aveludadas, creme suave e morangos frescos para celebrar.", image: redVelvet, tag: "Especial" },
] as const;