import { render, screen } from "@testing-library/react";
import IndicadorParcelas from "./IndicadorParcelas";

describe("IndicadorParcelas", () => {
  test("renderiza parcelas corretamente com 12x padrão", () => {
    render(<IndicadorParcelas preco={120} />);

    expect(
      screen.getByText("em até 12x de R$ 10.00")
    ).toBeInTheDocument();
  });

  test("renderiza parcelas corretamente com valor customizado", () => {
    render(<IndicadorParcelas preco={100} vezes={5} />);

    expect(
      screen.getByText("em até 5x de R$ 20.00")
    ).toBeInTheDocument();
  });
});