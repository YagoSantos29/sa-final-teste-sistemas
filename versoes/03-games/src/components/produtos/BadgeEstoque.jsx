

export default function BadgeEstoque({ emEstoque }) {
  return (
    <span className="badge-estoque">
      {emEstoque ? "Em estoque" : "Esgotado"}
    </span>
  );
}