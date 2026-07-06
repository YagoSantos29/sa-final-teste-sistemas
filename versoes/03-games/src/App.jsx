import { useState } from "react";
import "./styles/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";

import HomePage from "./pages/HomePage";
import ProdutoPage from "./pages/ProdutoPage";
import CarrinhoPage from "./pages/CarrinhoPage";
import ContatoPage from "./pages/ContatoPage";
import NaoEncontradaPage from "./pages/NaoEncontradaPage";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho((atual) => [...atual, produto]);
  }

  return (
    <BrowserRouter>
      <div className="loja">
        <Cabecalho quantidadeCarrinho={carrinho.length} />

        <Routes>
          <Route
            path="/"
            element={<HomePage aoAdicionar={adicionarAoCarrinho} />}
          />

          <Route
            path="/produto/:id"
            element={<ProdutoPage aoAdicionar={adicionarAoCarrinho} />}
          />

          <Route
            path="/carrinho"
            element={<CarrinhoPage itens={carrinho} />}
          />

          <Route
            path="/contato"
            element={<ContatoPage />}
          />

          <Route
            path="*"
            element={<NaoEncontradaPage />}
          />
        </Routes>

        <Rodape />
      </div>
    </BrowserRouter>
  );
}