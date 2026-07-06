// BotaoAdicionarCarrinho — botão que avisa o componente pai por callback.
// Props: onAdicionar (function) — chamada a cada clique.

export default function BotaoAdicionarCarrinho({ onAdicionar }) {
  return (
    <button onClick={onAdicionar}>
      Adicionar ao carrinho
    </button>
  );
}