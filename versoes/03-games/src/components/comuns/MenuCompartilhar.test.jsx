import { render, screen, fireEvent } from "@testing-library/react";
import MenuCompartilhar from "./MenuCompartilhar";

describe("MenuCompartilhar", () => {
  test("renderiza botão compartilhar", () => {
    render(<MenuCompartilhar />);

    expect(
      screen.getByRole("button", {
        name: /compartilhar/i,
      })
    ).toBeInTheDocument();
  });

  test("abre menu ao clicar", () => {
    render(<MenuCompartilhar />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /compartilhar/i,
      })
    );

    expect(screen.getByText("Copiar link")).toBeInTheDocument();
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("E-mail")).toBeInTheDocument();
  });

  test("fecha menu ao clicar novamente", () => {
    render(<MenuCompartilhar />);

    const botao = screen.getByRole("button", {
      name: /compartilhar/i,
    });

    fireEvent.click(botao);
    fireEvent.click(botao);

    expect(screen.queryByText("Copiar link")).not.toBeInTheDocument();
  });
});