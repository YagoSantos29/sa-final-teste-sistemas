// Avaliação — mostra a nota do produto em estrelas.
// Props: nota (number, de 0 a 5).
// Desenha "nota" estrelas cheias (★) e o restante vazias (☆), até 5.

export default function Avaliacao({ nota }) {
  const estrelas = "★".repeat(nota) + "☆".repeat(5 - nota);

  return (
    <span aria-label={`Nota ${nota} de 5`}>
      {estrelas}
    </span>
  );
}