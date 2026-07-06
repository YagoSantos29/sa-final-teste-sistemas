import { render, screen } from "@testing-library/react";
import Avaliacao from "./Avaliacao";

describe("Avaliacao", () => {
  test("renderiza estrelas corretamente para nota 4", () => {
    render(<Avaliacao nota={4} />);

    expect(screen.getByText("★★★★☆")).toBeInTheDocument();
    expect(screen.getByLabelText("Nota 4 de 5")).toBeInTheDocument();
  });

  test("renderiza estrelas corretamente para nota 5", () => {
    render(<Avaliacao nota={5} />);

    expect(screen.getByText("★★★★★")).toBeInTheDocument();
    expect(screen.getByLabelText("Nota 5 de 5")).toBeInTheDocument();
  });

  test("renderiza estrelas corretamente para nota 0", () => {
    render(<Avaliacao nota={0} />);

    expect(screen.getByText("☆☆☆☆☆")).toBeInTheDocument();
    expect(screen.getByLabelText("Nota 0 de 5")).toBeInTheDocument();
  });
});