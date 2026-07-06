import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { carregarProdutos } from "../services/api";

import Breadcrumb from "../components/layout/Breadcrumb";
import GaleriaImagens from "../components/comuns/GaleriaImagens";

import PrecoEtiqueta from "../components/produtos/PrecoEtiqueta";
import Avaliacao from "../components/produtos/Avaliacao.jsx";
import BadgeEstoque from "../components/produtos/BadgeEstoque.jsx";
import SeletorQuantidade from "../components/produtos/SeletorQuantidade";
import ToggleFavorito from "../components/produtos/ToggleFavorito";

import BotaoAdicionarCarrinho from "../components/produtos/BotaoAdicionarCarrinho.jsx";
import Abas from "../components/filtros/Abas.jsx";
import Acordeao from "../components/filtros/Acordeao.jsx";


export default function ProdutoPage({ aoAdicionar }) {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    carregarProdutos().then((lista) =>
      setProduto(lista.find((p) => String(p.id) === id))
    );
  }, [id]);

  if (!produto) return <p>Carregando produto...</p>;

  return (
    <main>
      <Breadcrumb caminho={[produto.categoria, produto.nome]} />

      <h2>{produto.nome}</h2>

      <GaleriaImagens imagens={produto.imagens} />

      <PrecoEtiqueta valor={produto.preco} />
      <Avaliacao nota={produto.nota} />
      <BadgeEstoque emEstoque={produto.emEstoque} />

      <SeletorQuantidade />
      <ToggleFavorito />

      <BotaoAdicionarCarrinho onAdicionar={() => aoAdicionar(produto)} />

      <Abas
        descricao={produto.descricao}
        avaliacoes={produto.avaliacoes}
      />

      <Acordeao
        titulo="Política de trocas"
        conteudo="Troque em até 7 dias após o recebimento."
      />
    </main>
  );
}