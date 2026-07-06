import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProdutoPage from "./ProdutoPage";

jest.mock("../services/api", () => ({
  carregarProdutos: jest.fn(),
}));

import { carregarProdutos } from "../services/api";

describe("ProdutoPage", () => {
  const produtoMock = {
    id: 1,
    nome: "Jogo Teste",
    categoria: "Ação",
    imagens: ["img1.jpg"],
    preco: 100,
    nota: 4,
    emEstoque: true,
    descricao: "Descrição do jogo",
    avaliacoes: [],
  };

  test("renderiza carregamento inicial", () => {
    carregarProdutos.mockResolvedValue([]);

    render(
      <MemoryRouter initialEntries={["/produto/1"]}>
        <Routes>
          <Route
            path="/produto/:id"
            element={<ProdutoPage aoAdicionar={() => {}} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Carregando produto...")).toBeInTheDocument();
  });

  test("renderiza produto corretamente", async () => {
    carregarProdutos.mockResolvedValue([produtoMock]);

    render(
      <MemoryRouter initialEntries={["/produto/1"]}>
        <Routes>
          <Route
            path="/produto/:id"
            element={<ProdutoPage aoAdicionar={() => {}} />}
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Jogo Teste")).toBeInTheDocument();
    });

    // 🔥 CORREÇÃO AQUI (texto dentro do breadcrumb)
    expect(screen.getByText(/ação/i)).toBeInTheDocument();

    expect(screen.getByText("Descrição do jogo")).toBeInTheDocument();
  });

  test("chama função ao adicionar ao carrinho", async () => {
    carregarProdutos.mockResolvedValue([produtoMock]);

    const mockAdicionar = jest.fn();

    render(
      <MemoryRouter initialEntries={["/produto/1"]}>
        <Routes>
          <Route
            path="/produto/:id"
            element={<ProdutoPage aoAdicionar={mockAdicionar} />}
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Jogo Teste")).toBeInTheDocument();
    });

    const botao = screen.getByText(/adicionar ao carrinho/i);
    botao.click();

    expect(mockAdicionar).toHaveBeenCalledWith(produtoMock);
  });
});