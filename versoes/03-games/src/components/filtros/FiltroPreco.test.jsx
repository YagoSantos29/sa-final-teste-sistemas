import { render, screen, fireEvent } from "@testing-library/react";
import FiltroPreco from "./FiltroPreco";

describe("FiltroPreco", () => {
  test("renderiza os filtros", () => {
    render(<FiltroPreco onFiltrar={() => {}} />);

    expect(
      screen.getByRole("button", { name: /até r\$ 100/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /acima de r\$ 100/i })
    ).toBeInTheDocument();
  });

  test("filtra até 100", () => {
    const onFiltrar = jest.fn();

    render(<FiltroPreco onFiltrar={onFiltrar} />);

    fireEvent.click(
      screen.getByRole("button", { name: /até r\$ 100/i })
    );

    expect(onFiltrar).toHaveBeenCalledWith("ate-100");
  });

  test("filtra acima de 100", () => {
    const onFiltrar = jest.fn();

    render(<FiltroPreco onFiltrar={onFiltrar} />);

    fireEvent.click(
      screen.getByRole("button", { name: /acima de r\$ 100/i })
    );

    expect(onFiltrar).toHaveBeenCalledWith("acima-100");
  });
});