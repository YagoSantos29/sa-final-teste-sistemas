import { useState } from "react";



export default function BotaoVerMais({ texto }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div>
      <button onClick={() => setAberto(!aberto)}>
        {aberto ? "Ver menos" : "Ver mais"}
      </button>

      {aberto && <p>{texto}</p>}
    </div>
  );
}