
import  PrecoEtiqueta  from "../produtos/PrecoEtiqueta.jsx";

export default function CardProduto({ nome, preco }) {
  return (
    <article className="card-produto">
      <h3>{nome}</h3>
      <PrecoEtiqueta valor={preco} />
    </article>
  );
}
