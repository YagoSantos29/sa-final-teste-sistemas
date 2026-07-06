import { render, screen } from "@testing-library/react";
import SeloDesconto from "./SeloDesconto";

describe("SeloDesconto", () => {
  test("renderiza o percentual de desconto corretamente", () => {
    render(<SeloDesconto percentual={20} />);

    expect(screen.getByText("-20%")).toBeInTheDocument();
  });

  test("funciona com outro valor de desconto", () => {
    render(<SeloDesconto percentual={50} />);

    expect(screen.getByText("-50%")).toBeInTheDocument();
  });
});