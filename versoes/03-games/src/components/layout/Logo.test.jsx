import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  test("renderiza o nome da loja", () => {
    render(<Logo />);

    expect(
      screen.getByText("PixelPlay")
    ).toBeInTheDocument();
  });
});