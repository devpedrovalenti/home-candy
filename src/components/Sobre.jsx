export default function Sobre() {
  const destaques = [
    { icone: "🥚", titulo: "Ingredientes frescos", texto: "Nada de conservantes, só ingredientes de qualidade." },
    { icone: "👩‍🍳", titulo: "Feito sob encomenda", texto: "Cada pedido é preparado com carinho no dia." },
    { icone: "🚚", titulo: "Entrega ou retirada", texto: "Combine pelo WhatsApp a melhor forma para você." },
  ];

  return (
    <section id="sobre" className="secao secao--rosa">
      <div className="container">
        <h2 className="titulo">Por que escolher a gente?</h2>
        <div className="destaques">
          {destaques.map((d) => (
            <div key={d.titulo} className="destaque">
              <span className="destaque__icone">{d.icone}</span>
              <h3>{d.titulo}</h3>
              <p>{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}