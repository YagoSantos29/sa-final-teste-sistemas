import { render, screen } from "@testing-library/react";
import BadgeEstoque from "./BadgeEstoque";

describe("BadgeEstoque", () => {
  test("mostra 'Em estoque' quando verdadeiro", () => {
    render(<BadgeEstoque emEstoque={true} />);

    expect(screen.getByText("Em estoque")).toBeInTheDocument();
  });

  test("mostra 'Esgotado' quando falso", () => {
    render(<BadgeEstoque emEstoque={false} />);

    expect(screen.getByText("Esgotado")).toBeInTheDocument();
  });
});