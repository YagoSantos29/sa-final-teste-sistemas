import { render, screen } from "@testing-library/react";
import TagCategoria from "./TagCategoria";

describe("TagCategoria", () => {
  test("renderiza a categoria corretamente", () => {
    render(<TagCategoria categoria="Ação" />);

    expect(screen.getByText("Ação")).toBeInTheDocument();
  });

  test("renderiza outra categoria corretamente", () => {
    render(<TagCategoria categoria="RPG" />);

    expect(screen.getByText("RPG")).toBeInTheDocument();
  });
});