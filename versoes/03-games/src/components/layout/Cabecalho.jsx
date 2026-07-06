// Cabecalho — barra do topo, aparece em todas as páginas.
// Props: quantidadeCarrinho (number) — quantos itens estão no carrinho.

import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Cabecalho({ quantidadeCarrinho }) {
  return (
    <header className="cabecalho">
      <Logo />

      <nav>
        <Link to="/">Início</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/carrinho">
          Carrinho ({quantidadeCarrinho})
        </Link>
      </nav>
    </header>
  );
}