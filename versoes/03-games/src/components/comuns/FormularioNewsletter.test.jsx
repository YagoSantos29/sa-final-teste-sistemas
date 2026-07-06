import { render, screen, fireEvent } from "@testing-library/react";
import FormularioNewsletter from "./FormularioNewsletter";

describe("FormularioNewsletter", () => {
  test("renderiza input e botão", () => {
    render(<FormularioNewsletter onInscrever={() => {}} />);

    expect(screen.getByPlaceholderText("Seu e-mail")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /inscrever/i })
    ).toBeInTheDocument();
  });

  test("envia email ao submeter formulário", () => {
    const onInscrever = jest.fn();

    render(<FormularioNewsletter onInscrever={onInscrever} />);

    const input = screen.getByPlaceholderText("Seu e-mail");

    fireEvent.change(input, {
      target: { value: "teste@email.com" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /inscrever/i })
    );

    expect(onInscrever).toHaveBeenCalledWith("teste@email.com");
  });

  test("limpa o campo após envio", () => {
    const onInscrever = jest.fn();

    render(<FormularioNewsletter onInscrever={onInscrever} />);

    const input = screen.getByPlaceholderText("Seu e-mail");

    fireEvent.change(input, {
      target: { value: "teste@email.com" },
    });

    fireEvent.submit(input.closest("form"));

    expect(input.value).toBe("");
  });
});