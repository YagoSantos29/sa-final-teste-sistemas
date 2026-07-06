import { render, screen } from "@testing-library/react";
import CardProduto from "./CardProduto";

describe("CardProduto", () => {
  test("renderiza nome e preço corretamente", () => {
    render(<CardProduto nome="Jogo Teste" preco={99.9} />);

    expect(screen.getByText("Jogo Teste")).toBeInTheDocument();
    expect(screen.getByText("R$ 99,90")).toBeInTheDocument();
  });

  test("renderiza outro produto corretamente", () => {
    render(<CardProduto nome="Controle Pro" preco={250} />);

    expect(screen.getByText("Controle Pro")).toBeInTheDocument();
    expect(screen.getByText("R$ 250,00")).toBeInTheDocument();
  });
});