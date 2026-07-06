

export default function Avaliacao({ nota }) {
  const estrelas = "★".repeat(nota) + "☆".repeat(5 - nota);

  return (
    <span aria-label={`Nota ${nota} de 5`}>
      {estrelas}
    </span>
  );
}