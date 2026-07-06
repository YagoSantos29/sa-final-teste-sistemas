import { render, screen, fireEvent } from "@testing-library/react";
import GaleriaImagens from "./GaleriaImagens";

describe("GaleriaImagens", () => {
  const imagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
  ];

  test("renderiza primeira imagem", () => {
    render(<GaleriaImagens imagens={imagens} />);

    const imagem = screen.getByRole("img");

    expect(imagem).toHaveAttribute("alt", "imagem1.jpg");
  });

  test("vai para próxima imagem", () => {
    render(<GaleriaImagens imagens={imagens} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /próxima imagem/i,
      })
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "imagem2.jpg"
    );
  });

  test("vai para imagem anterior", () => {
    render(<GaleriaImagens imagens={imagens} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /imagem anterior/i,
      })
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "imagem3.jpg"
    );
  });
});