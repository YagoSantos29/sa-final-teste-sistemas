import { render, screen, fireEvent } from "@testing-library/react";
import BarraBusca from "./BarraBusca";

describe("BarraBusca", () => {
  test("renderiza campo e botão", () => {
    render(<BarraBusca onBuscar={() => {}} />);

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /buscar/i })
    ).toBeInTheDocument();
  });

  test("atualiza valor digitado", () => {
    render(<BarraBusca onBuscar={() => {}} />);

    const input = screen.getByRole("searchbox");

    fireEvent.change(input, {
      target: { value: "notebook" },
    });

    expect(input.value).toBe("notebook");
  });

  test("chama onBuscar ao enviar", () => {
    const onBuscar = jest.fn();

    render(<BarraBusca onBuscar={onBuscar} />);

    const input = screen.getByRole("searchbox");

    fireEvent.change(input, {
      target: { value: "notebook" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /buscar/i })
    );

    expect(onBuscar).toHaveBeenCalledWith("notebook");
  });
});