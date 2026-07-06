import { render, screen, fireEvent } from "@testing-library/react";
import ToggleFavorito from "./ToggleFavorito";

describe("ToggleFavorito", () => {
  test("renderiza estado inicial como Favoritar", () => {
    render(<ToggleFavorito />);

    expect(screen.getByText("Favoritar")).toBeInTheDocument();
  });

  test("alterna para Favorito ao clicar", () => {
    render(<ToggleFavorito />);

    const botao = screen.getByText("Favoritar");
    fireEvent.click(botao);

    expect(screen.getByText("Favorito ✓")).toBeInTheDocument();
  });

  test("alternar novamente volta para Favoritar", () => {
    render(<ToggleFavorito />);

    const botao = screen.getByText("Favoritar");

    fireEvent.click(botao);
    fireEvent.click(screen.getByText("Favorito ✓"));

    expect(screen.getByText("Favoritar")).toBeInTheDocument();
  });
});