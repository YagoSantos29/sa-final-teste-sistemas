import FormularioNewsletter from "../components/comuns/FormularioNewsletter.jsx"


export default function ContatoPage() {
  function inscrever(email) {
    console.log("Newsletter:", email);
  }

  return (
    <main>
      <h2>Fale com a gente</h2>
      <p>Deixe seu e-mail e receba nossas novidades.</p>

      <FormularioNewsletter onInscrever={inscrever} />
    </main>
  );
}