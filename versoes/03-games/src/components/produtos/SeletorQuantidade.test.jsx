import { render, screen, fireEvent } from "@testing-library/react";
import SeletorQuantidade from "./SeletorQuantidade";

describe("SeletorQuantidade", () => {
  test("renderiza quantidade inicial como 1", () => {
    render(<SeletorQuantidade />);

    expect(screen.getByText(/Quantidade: 1/i)).toBeInTheDocument();
  });

  test("aumenta a quantidade ao clicar no botão +", () => {
    render(<SeletorQuantidade />);

    const botaoMais = screen.getByLabelText("Aumentar quantidade");

    fireEvent.click(botaoMais);

    expect(screen.getByText(/Quantidade: 2/i)).toBeInTheDocument();
  });

  test("diminui a quantidade ao clicar no botão -", () => {
    render(<SeletorQuantidade />);

    const botaoMais = screen.getByLabelText("Aumentar quantidade");
    const botaoMenos = screen.getByLabelText("Diminuir quantidade");

    fireEvent.click(botaoMais); // 2
    fireEvent.click(botaoMenos); // volta pra 1

    expect(screen.getByText(/Quantidade: 1/i)).toBeInTheDocument();
  });

  test("não permite quantidade menor que 1", () => {
    render(<SeletorQuantidade />);

    const botaoMenos = screen.getByLabelText("Diminuir quantidade");

    fireEvent.click(botaoMenos); // tenta ir pra 0

    expect(screen.getByText(/Quantidade: 1/i)).toBeInTheDocument();
  });
});