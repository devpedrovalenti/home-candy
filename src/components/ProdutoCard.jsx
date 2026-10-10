export default function ProdutoCard({ produto, adicionar }) {
  const preco = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="card">
      <div className="card__img">
        {produto.imagem ? (
          <img src={produto.imagem} alt={produto.nome} />
        ) : (
          <span>{produto.emoji}</span>
        )}
      </div>
      <div className="card__corpo">
        <span className="card__cat">{produto.categoria}</span>
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        <div className="card__rodape">
          <strong>{preco}</strong>
          <button className="btn btn--pequeno" onClick={() => adicionar(produto)}>
            + Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}