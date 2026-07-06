import { useState } from "react";


export default function ToggleFavorito() {
  const [favorito, setFavorito] = useState(false);

  return (
    <button onClick={() => setFavorito(!favorito)}>
      {favorito ? "Favorito ✓" : "Favoritar"}
    </button>
  );
}
