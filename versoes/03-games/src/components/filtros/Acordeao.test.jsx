import { render, screen, fireEvent } from "@testing-library/react";
import Acordeao from "./Acordeao";

describe("Acordeao", () => {
  test("não exibe conteúdo inicialmente", () => {
    render(
      <Acordeao
        titulo="Pergunta"
        conteudo="Resposta"
      />
    );

    expect(
      screen.queryByText("Resposta")
    ).not.toBeInTheDocument();
  });

  test("abre ao clicar", () => {
    render(
      <Acordeao
        titulo="Pergunta"
        conteudo="Resposta"
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: /pergunta/i })
    );

    expect(screen.getByText("Resposta")).toBeInTheDocument();
  });

  test("fecha ao clicar novamente", () => {
    render(
      <Acordeao
        titulo="Pergunta"
        conteudo="Resposta"
      />
    );

    const botao = screen.getByRole("button", {
      name: /pergunta/i,
    });

    fireEvent.click(botao);
    fireEvent.click(botao);

    expect(
      screen.queryByText("Resposta")
    ).not.toBeInTheDocument();
  });
});