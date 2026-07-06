
export default function PrecoEtiqueta({ valor }) {
  const formatado = "R$ " + valor.toFixed(2).replace(".", ",");
  return <span className="preco">{formatado}</span>;
}
