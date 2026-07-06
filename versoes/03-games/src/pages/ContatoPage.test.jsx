import { render, screen, fireEvent } from "@testing-library/react";
import ContatoPage from "./ContatoPage";

describe("ContatoPage", () => {
  test("renderiza textos da página", () => {
    render(<ContatoPage />);

    expect(screen.getByText("Fale com a gente")).toBeInTheDocument();
    expect(
      screen.getByText("Deixe seu e-mail e receba nossas novidades.")
    ).toBeInTheDocument();
  });

  test("renderiza formulário de newsletter", () => {
    render(<ContatoPage />);

    
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /inscrever/i })
    ).toBeInTheDocument();
  });

  test("envia e-mail corretamente", () => {
    render(<ContatoPage />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /inscrever/i });

    fireEvent.change(input, { target: { value: "teste@email.com" } });
    fireEvent.click(button);

   
    expect(input.value).toBe("");
  });
});