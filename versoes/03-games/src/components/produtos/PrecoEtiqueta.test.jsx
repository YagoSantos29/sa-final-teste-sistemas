import { render, screen } from "@testing-library/react";
import PrecoEtiqueta from "./PrecoEtiqueta";

describe("PrecoEtiqueta", () => {
  test("formata valor em reais corretamente", () => {
    render(<PrecoEtiqueta valor={49.9} />);

    expect(screen.getByText("R$ 49,90")).toBeInTheDocument();
  });

  test("formata valores inteiros corretamente", () => {
    render(<PrecoEtiqueta valor={10} />);

    expect(screen.getByText("R$ 10,00")).toBeInTheDocument();
  });
});