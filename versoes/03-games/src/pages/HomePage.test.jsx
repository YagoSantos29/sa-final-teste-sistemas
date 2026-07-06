import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage";


jest.mock("../services/api", () => ({
  carregarProdutos: jest.fn(),
}));

import { carregarProdutos } from "../services/api";

describe("HomePage", () => {
  const produtosMock = [
    {
      id: 1,
      nome: "Jogo 1",
      preco: 50,
      categoria: "Ação",
      nota: 4,
      emEstoque: true,
    },
    {
      id: 2,
      nome: "Jogo 2",
      preco: 100,
      categoria: "RPG",
      nota: 5,
      emEstoque: false,
    },
  ];

  test("renderiza produtos corretamente", async () => {
    carregarProdutos.mockResolvedValue(produtosMock);

    render(
      <MemoryRouter>
        <HomePage aoAdicionar={() => {}} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Jogo 1")).toBeInTheDocument();
    });

    expect(screen.getByText("Jogo 2")).toBeInTheDocument();
    expect(screen.getByText(/Ver detalhes de Jogo 1/i)).toBeInTheDocument();
  });

  test("renderiza link de navegação dos produtos", async () => {
    carregarProdutos.mockResolvedValue(produtosMock);

    render(
      <MemoryRouter>
        <HomePage aoAdicionar={() => {}} />
      </MemoryRouter>
    );

    await waitFor(() => {
      const link = screen.getByText(/Ver detalhes de Jogo 1/i);
      expect(link).toBeInTheDocument();
      expect(link.closest("a")).toHaveAttribute("href", "/produto/1");
    });
  });

  test("chama função ao adicionar ao carrinho", async () => {
    carregarProdutos.mockResolvedValue(produtosMock);

    const mockAdicionar = jest.fn();

    render(
      <MemoryRouter>
        <HomePage aoAdicionar={mockAdicionar} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Jogo 1")).toBeInTheDocument();
    });

    const botao = screen.getAllByText(/adicionar/i)[0];
    botao.click();

    expect(mockAdicionar).toHaveBeenCalled();
  });
});