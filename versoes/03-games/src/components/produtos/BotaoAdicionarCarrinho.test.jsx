import { render, screen, fireEvent } from "@testing-library/react";
import BotaoAdicionarCarrinho from "./BotaoAdicionarCarrinho";

describe("BotaoAdicionarCarrinho", () => {
  test("renderiza o botão corretamente", () => {
    render(<BotaoAdicionarCarrinho onAdicionar={() => {}} />);

    expect(screen.getByText("Adicionar ao carrinho")).toBeInTheDocument();
  });

  test("chama onAdicionar ao clicar no botão", () => {
    const mockAdicionar = jest.fn();

    render(<BotaoAdicionarCarrinho onAdicionar={mockAdicionar} />);

    const botao = screen.getByText("Adicionar ao carrinho");
    fireEvent.click(botao);

    expect(mockAdicionar).toHaveBeenCalledTimes(1);
  });

  test("chama onAdicionar múltiplas vezes ao clicar várias vezes", () => {
    const mockAdicionar = jest.fn();

    render(<BotaoAdicionarCarrinho onAdicionar={mockAdicionar} />);

    const botao = screen.getByText("Adicionar ao carrinho");

    fireEvent.click(botao);
    fireEvent.click(botao);
    fireEvent.click(botao);

    expect(mockAdicionar).toHaveBeenCalledTimes(3);
  });
});