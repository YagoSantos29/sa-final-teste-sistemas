import { useState } from "react";

// MenuCompartilhar — abre e fecha a lista de opções de compartilhamento.
export default function MenuCompartilhar() {
  const [aberto, setAberto] = useState(false);

  return (
    <div>
      <button onClick={() => setAberto(!aberto)}>
        Compartilhar
      </button>

      {aberto && (
        <ul>
          <li>Copiar link</li>
          <li>WhatsApp</li>
          <li>E-mail</li>
        </ul>
      )}
    </div>
  );
}