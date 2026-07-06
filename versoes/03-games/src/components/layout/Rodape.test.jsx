import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Rodape from "./Rodape";

describe("Rodape", () => {
  test("renderiza texto de direitos autorais", () => {
    render(<Rodape />);

    expect(
      screen.getByText(/pixelplay/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/todos os direitos reservados/i)
    ).toBeInTheDocument();
  });

  test("renderiza elemento footer", () => {
    const { container } = render(<Rodape />);

    expect(
      container.querySelector("footer")
    ).toBeInTheDocument();
  });
});