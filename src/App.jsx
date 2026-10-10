import { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalogo from "./components/Catalogo";
import Sobre from "./components/Sobre";
import Carrinho from "./components/Carrinho";
import Footer from "./components/Footer";

export default function App() {
  const [itens, setItens] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  function adicionar(produto) {
    setItens((atual) => {
      const existe = atual.find((i) => i.id === produto.id);
      if (existe) {
        return atual.map((i) =>
          i.id === produto.id ? { ...i, qtd: i.qtd + 1 } : i
        );
      }
      return [...atual, { ...produto, qtd: 1 }];
    });
  }

  function alterarQtd(id, delta) {
    setItens((atual) =>
      atual
        .map((i) => (i.id === id ? { ...i, qtd: i.qtd + delta } : i))
        .filter((i) => i.qtd > 0)
    );
  }

  function limpar() {
    setItens([]);
  }

  const totalItens = useMemo(
    () => itens.reduce((soma, i) => soma + i.qtd, 0),
    [itens]
  );

  return (
    <>
      <Header totalItens={totalItens} abrirCarrinho={() => setCarrinhoAberto(true)} />
      <main>
        <Hero />
        <Catalogo adicionar={adicionar} />
        <Sobre />
      </main>
      <Footer />
      <Carrinho
        aberto={carrinhoAberto}
        fechar={() => setCarrinhoAberto(false)}
        itens={itens}
        alterarQtd={alterarQtd}
        limpar={limpar}
      />
    </>
  );
}