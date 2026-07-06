
export default function IndicadorParcelas({ preco, vezes = 12 }) {
  const parcela = (preco / vezes).toFixed(2);
  return (
    <p className="parcelas">
      em até {vezes}x de R$ {parcela}
    </p>
  );
}
