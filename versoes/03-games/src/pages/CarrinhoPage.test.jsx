import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CarrinhoPage from "./CarrinhoPage";

describe("CarrinhoPage", () => {
  test("mostra mensagem quando carrinho está vazio", () => {
    render(
      <MemoryRouter>
        <CarrinhoPage itens={[]} />
      </MemoryRouter>
    );

    expect(screen.getByText("O carrinho está vazio.")).toBeInTheDocument();
    expect(screen.getByText("Voltar às compras")).toBeInTheDocument();
  });

  test("renderiza itens do carrinho", () => {
    const itens = [
      { nome: "Jogo 1", preco: 50 },
      { nome: "Jogo 2", preco: 100 },
    ];

    render(
      <MemoryRouter>
        <CarrinhoPage itens={itens} />
      </MemoryRouter>
    );

    expect(screen.getByText("Jogo 1")).toBeInTheDocument();
    expect(screen.getByText("Jogo 2")).toBeInTheDocument();
  });

  test("calcula total corretamente", () => {
    const itens = [
      { nome: "Jogo 1", preco: 50 },
      { nome: "Jogo 2", preco: 100 },
    ];

    render(
      <MemoryRouter>
        <CarrinhoPage itens={itens} />
      </MemoryRouter>
    );

   
    expect(screen.getByText(/150/)).toBeInTheDocument();
  });
});