import { render, screen, fireEvent } from "@testing-library/react";
import EstrelasInterativas from "./EstrelasInterativas";

describe("EstrelasInterativas", () => {
  test("renderiza 5 estrelas clicáveis", () => {
    render(<EstrelasInterativas onAvaliar={() => {}} />);

    const botoes = screen.getAllByRole("button");

    expect(botoes).toHaveLength(5);
  });

  test("chama onAvaliar com nota correta ao clicar", () => {
    const mockAvaliar = jest.fn();

    render(<EstrelasInterativas onAvaliar={mockAvaliar} />);

    const estrela3 = screen.getByLabelText("Dar nota 3");
    fireEvent.click(estrela3);

    expect(mockAvaliar).toHaveBeenCalledWith(3);
  });

  test("chama onAvaliar corretamente para diferentes estrelas", () => {
    const mockAvaliar = jest.fn();

    render(<EstrelasInterativas onAvaliar={mockAvaliar} />);

    fireEvent.click(screen.getByLabelText("Dar nota 1"));
    fireEvent.click(screen.getByLabelText("Dar nota 5"));

    expect(mockAvaliar).toHaveBeenCalledWith(1);
    expect(mockAvaliar).toHaveBeenCalledWith(5);
  });
});