import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
  test("renderiza início e níveis", () => {
    render(
      <MemoryRouter>
        <Breadcrumb
          caminho={["Eletrônicos", "Fones"]}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Eletrônicos")).toBeInTheDocument();
    expect(screen.getByText("Fones")).toBeInTheDocument();
  });

  test("renderiza navegação", () => {
    render(
      <MemoryRouter>
        <Breadcrumb caminho={[]} />
      </MemoryRouter>
    );

    expect(
      screen.getByLabelText("Trilha de navegação")
    ).toBeInTheDocument();
  });
});