import { render, screen } from "@testing-library/react";
import SeloFreteGratis from "./SeloFreteGratis";

describe("SeloFreteGratis", () => {
  test("renderiza mensagem de frete grátis", () => {
    render(<SeloFreteGratis />);

    expect(
      screen.getByText("Frete grátis acima de R$ 150,00")
    ).toBeInTheDocument();
  });
});