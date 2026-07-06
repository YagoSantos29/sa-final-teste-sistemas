import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { carregarProdutos } from "../services/api";

// componentes da página (ajuste se estiverem em outra pasta)
import BannerPromocional from "../components/layout/BannerPromocional";
import BarraBusca from "../components/filtros/BarraBusca.jsx";
import FiltroPreco from "../components/filtros/FiltroPreco.jsx";
import CardProduto from "../components/produtos/CardProduto.jsx";
import Avaliacao from "../components/produtos/Avaliacao.jsx";
import BadgeEstoque from "../components/produtos/BadgeEstoque.jsx";
import BotaoAdicionarCarrinho from "../components/produtos/BotaoAdicionarCarrinho.jsx";

// componentes de produtos
import SeloFreteGratis from "../components/produtos/SeloFreteGratis";
import TagCategoria from "../components/produtos/TagCategoria";

// HomePage — vitrine da loja
export default function HomePage({ aoAdicionar }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos().then(setProdutos);
  }, []);

  function buscar(texto) {
    console.log("Buscar:", texto);
  }

  function filtrar(faixa) {
    console.log("Filtro:", faixa);
  }

  return (
    <main>
      <BannerPromocional mensagem="Semana gamer: até 40% OFF nos lançamentos" />
      <BarraBusca onBuscar={buscar} />
      <FiltroPreco onFiltrar={filtrar} />
      <SeloFreteGratis />

      <h2>Jogos em destaque</h2>

      <ul className="grade-produtos">
        {produtos.map((p) => (
          <li key={p.id} className="item-produto">
            <Link to={`/produto/${p.id}`}>
              Ver detalhes de {p.nome}
            </Link>

            <CardProduto nome={p.nome} preco={p.preco} />
            <TagCategoria categoria={p.categoria} />
            <Avaliacao nota={p.nota} />
            <BadgeEstoque emEstoque={p.emEstoque} />

            <BotaoAdicionarCarrinho onAdicionar={() => aoAdicionar(p)} />
          </li>
        ))}
      </ul>
    </main>
  );
}