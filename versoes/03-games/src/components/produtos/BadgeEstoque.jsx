// BadgeEstoque — mostra se o produto está disponível.
// Props: emEstoque (boolean) — true mostra "Em estoque", false mostra "Esgotado".

export default function BadgeEstoque({ emEstoque }) {
  return (
    <span className="badge-estoque">
      {emEstoque ? "Em estoque" : "Esgotado"}
    </span>
  );
}