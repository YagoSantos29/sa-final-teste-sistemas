import { render, screen } from "@testing-library/react";
import BannerPromocional from "./BannerPromocional";

describe("BannerPromocional", () => {
  test("renderiza a mensagem recebida", () => {
    render(
      <BannerPromocional mensagem="Promoção de Verão!" />
    );

    expect(
      screen.getByText("Promoção de Verão!")
    ).toBeInTheDocument();
  });
});