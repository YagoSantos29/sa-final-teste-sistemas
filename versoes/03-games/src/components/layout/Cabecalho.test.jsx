import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cabecalho from "./Cabecalho";

describe("Cabecalho", () => {
  test("renderiza logo e links", () => {
    render(
      <MemoryRouter>
        <Cabecalho quantidadeCarrinho={3} />
      </MemoryRouter>
    );

    expect(screen.getByText("PixelPlay")).toBeInTheDocument();
    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  test("mostra quantidade do carrinho", () => {
    render(
      <MemoryRouter>
        <Cabecalho quantidadeCarrinho={5} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/carrinho \(5\)/i)
    ).toBeInTheDocument();
  });
});