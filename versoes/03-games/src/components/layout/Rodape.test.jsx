import { render, screen } from "@testing-library/react";
import Rodape from "./Rodape";

describe("Rodape", () => {
  test("renderiza texto de direitos autorais", () => {
    render(<Rodape />);

    expect(
      screen.getByText(
        /pixelplay - todos os direitos reservados/i
      )
    ).toBeInTheDocument();
  });

  test("renderiza elemento footer", () => {
    const { container } = render(<Rodape />);

    expect(
      container.querySelector("footer")
    ).toBeInTheDocument();
  });
});