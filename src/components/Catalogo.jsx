import { useState } from "react";
import { categorias, produtos } from "../data/config";
import ProdutoCard from "./ProdutoCard";

export default function Catalogo({ adicionar }) {
  const [categoria, setCategoria] = useState("Todos");

  const lista =
    categoria === "Todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoria);

  return (
    <section id="produtos" className="secao">
      <div className="container">
        <h2 className="titulo">Nosso cardápio</h2>
        <p className="subtitulo">Escolha seus favoritos e monte seu pedido.</p>

        <div className="filtros">
          {categorias.map((c) => (
            <button
              key={c}
              className={`filtro ${c === categoria ? "ativo" : ""}`}
              onClick={() => setCategoria(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid">
          {lista.map((p) => (
            <ProdutoCard key={p.id} produto={p} adicionar={adicionar} />
          ))}
        </div>
      </div>
    </section>
  );
}