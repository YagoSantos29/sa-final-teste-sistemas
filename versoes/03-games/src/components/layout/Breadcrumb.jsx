// Breadcrumb — trilha de navegação (ex.: Início / Eletrônicos / Fone).
// Props: caminho (array de strings) — cada nível da trilha depois do "Início".
// O "Início" é um <Link> para a Home; os demais níveis são texto.

import { Link } from "react-router-dom";

export default function Breadcrumb({ caminho }) {
  return (
    <nav aria-label="Trilha de navegação" className="breadcrumb">
      <Link to="/">Início</Link>

      {caminho.map((nivel) => (
        <span key={nivel}> / {nivel}</span>
      ))}
    </nav>
  );
}