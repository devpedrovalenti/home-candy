import { loja } from "../data/config";

export default function Header({ totalItens, abrirCarrinho }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="logo">
          🧁 {loja.nome}
        </a>
        <nav className="nav">
          <a href="#produtos">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="btn-carrinho" onClick={abrirCarrinho}>
          🛒 Carrinho
          {totalItens > 0 && <span className="badge">{totalItens}</span>}
        </button>
      </div>
    </header>
  );
}