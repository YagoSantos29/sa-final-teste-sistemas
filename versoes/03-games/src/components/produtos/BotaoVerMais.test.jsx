import { render, screen, fireEvent } from "@testing-library/react";
import BotaoVerMais from "./BotaoVerMais";

describe("BotaoVerMais", () => {
  test("renderiza botão com texto inicial Ver mais", () => {
    render(<BotaoVerMais texto="Texto oculto" />);

    expect(screen.getByText("Ver mais")).toBeInTheDocument();
  });

  test("mostra texto ao clicar no botão", () => {
    render(<BotaoVerMais texto="Texto oculto" />);

    const botao = screen.getByText("Ver mais");
    fireEvent.click(botao);

    expect(screen.getByText("Ver menos")).toBeInTheDocument();
    expect(screen.getByText("Texto oculto")).toBeInTheDocument();
  });

  test("oculta texto ao clicar novamente", () => {
    render(<BotaoVerMais texto="Texto oculto" />);

    const botao = screen.getByText("Ver mais");

    fireEvent.click(botao); // abre
    fireEvent.click(screen.getByText("Ver menos")); // fecha

    expect(screen.getByText("Ver mais")).toBeInTheDocument();
    expect(screen.queryByText("Texto oculto")).not.toBeInTheDocument();
  });
});