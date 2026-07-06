import { render, screen, fireEvent } from "@testing-library/react";
import Abas from "./Abas";

describe("Abas", () => {
  test("mostra descrição inicialmente", () => {
    render(
      <Abas
        descricao="Descrição do produto"
        avaliacoes="5 estrelas"
      />
    );

    expect(screen.getByText("Descrição do produto")).toBeInTheDocument();
  });

  test("troca para avaliações", () => {
    render(
      <Abas
        descricao="Descrição do produto"
        avaliacoes="5 estrelas"
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: /avaliações/i })
    );

    expect(screen.getByText("5 estrelas")).toBeInTheDocument();
  });

  test("volta para descrição", () => {
    render(
      <Abas
        descricao="Descrição do produto"
        avaliacoes="5 estrelas"
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: /avaliações/i })
    );

    fireEvent.click(
      screen.getByRole("button", { name: /descrição/i })
    );

    expect(screen.getByText("Descrição do produto")).toBeInTheDocument();
  });
});