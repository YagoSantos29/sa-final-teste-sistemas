import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NaoEncontradaPage from "./NaoEncontradaPage";

describe("NaoEncontradaPage", () => {
  test("renderiza mensagem de página não encontrada", () => {
    render(
      <MemoryRouter>
        <NaoEncontradaPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Página não encontrada")
    ).toBeInTheDocument();

    expect(
      screen.getByText("O endereço que você tentou acessar não existe.")
    ).toBeInTheDocument();
  });

  test("renderiza link para página inicial", () => {
    render(
      <MemoryRouter>
        <NaoEncontradaPage />
      </MemoryRouter>
    );

    const link = screen.getByText("Voltar para o início");

    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/");
  });
});