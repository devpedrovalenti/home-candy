import { useState } from "react";
import { loja } from "../data/config";

const moeda = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Carrinho({ aberto, fechar, itens, alterarQtd, limpar }) {
  const [nome, setNome] = useState("");
  const [obs, setObs] = useState("");

  const total = itens.reduce((s, i) => s + i.preco * i.qtd, 0);

  function enviarPedido() {
    if (!nome.trim()) {
      alert("Por favor, informe seu nome.");
      return;
    }

    const linhas = itens
      .map((i) => `• ${i.qtd}x ${i.nome} - ${moeda(i.preco * i.qtd)}`)
      .join("\n");

    const mensagem =
      `Olá! Meu nome é ${nome}. Gostaria de fazer um pedido:\n\n` +
      `${linhas}\n\n` +
      `*Total: ${moeda(total)}*` +
      (obs.trim() ? `\n\nObservações: ${obs}` : "");

    const url = `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <div className={`overlay ${aberto ? "aberto" : ""}`} onClick={fechar} />
      <aside className={`carrinho ${aberto ? "aberto" : ""}`}>
        <div className="carrinho__topo">
          <h2>Seu pedido</h2>
          <button className="fechar" onClick={fechar} aria-label="Fechar">
            ✕
          </button>
        </div>

        {itens.length === 0 ? (
          <p className="carrinho__vazio">Seu carrinho está vazio 🍰</p>
        ) : (
          <>
            <ul className="carrinho__lista">
              {itens.map((i) => (
                <li key={i.id} className="carrinho__item">
                  <div>
                    <strong>{i.nome}</strong>
                    <small>{moeda(i.preco)} cada</small>
                  </div>
                  <div className="qtd">
                    <button onClick={() => alterarQtd(i.id, -1)}>−</button>
                    <span>{i.qtd}</span>
                    <button onClick={() => alterarQtd(i.id, 1)}>+</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="carrinho__form">
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <textarea
                rows="3"
                placeholder="Observações (data de entrega, sabor, mensagem no bolo...)"
                value={obs}
                onChange={(e) => setObs(e.target.value)}
              />
            </div>

            <div className="carrinho__rodape">
              <div className="total">
                <span>Total</span>
                <strong>{moeda(total)}</strong>
              </div>
              <button className="btn btn--whats" onClick={enviarPedido}>
                Enviar pedido pelo WhatsApp
              </button>
              <button className="link-limpar" onClick={limpar}>
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}