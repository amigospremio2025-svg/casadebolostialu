import goiabada from "@/assets/bolo-goiabada.jpg.asset.json";
import laranja from "@/assets/bolo-laranja.jpg.asset.json";
import chocolate from "@/assets/bolo-chocolate.jpg.asset.json";
import banana from "@/assets/bolo-banana.jpg.asset.json";
import mesclado from "@/assets/bolo-mesclado.jpg.asset.json";
import milho from "@/assets/bolo-milho.jpg.asset.json";

export const cakes: { name: string; description: string; image: string | null; tag: string }[] = [
  { name: "Bolo de Chocolate", description: "Massa úmida e fofinha, com o sabor intenso do chocolate.", image: chocolate.url, tag: "Mais pedido" },
  { name: "Bolo de Goiabada", description: "Massa amanteigada com fios generosos de goiabada cremosa.", image: goiabada.url, tag: "Especial" },
  { name: "Bolo de Banana com Canela", description: "Banana caramelizada e canela por cima, com cheirinho de casa de vó.", image: banana.url, tag: "Sabor de infância" },
  { name: "Bolo de Laranja", description: "Massa leve e molhadinha, com calda de laranja.", image: milho.url, tag: "Caseiro" },
  { name: "Bolo de Banana com Chocolate", description: "Massa de banana mesclada com chocolate e açúcar com canela.", image: mesclado.url, tag: "Novidade" },
  { name: "Bolo de Milho", description: "Receita tradicional, cremosa e douradinha.", image: laranja.url, tag: "Tradicional" },
];
