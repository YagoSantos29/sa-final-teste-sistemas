

import { useState } from "react";

export default function FormularioNewsletter({ onInscrever }) {
  const [email, setEmail] = useState("");

  function enviar(e) {
    e.preventDefault();
    onInscrever(email);
    setEmail("");
  }

  return (
    <form onSubmit={enviar}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu e-mail"
      />
      <button type="submit">Inscrever</button>
    </form>
  );
}