
export  default function EstrelasInterativas({ onAvaliar }) {
  const estrelas = [1, 2, 3, 4, 5];
  return (
    <div>
      {estrelas.map((n) => (
        <button key={n} aria-label={`Dar nota ${n}`} onClick={() => onAvaliar(n)}>
          ★
        </button>
      ))}
    </div>
  );
}
