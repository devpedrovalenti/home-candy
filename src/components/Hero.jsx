import { loja } from "../data/config";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__texto">
          <span className="tag">Feito à mão, todos os dias</span>
          <h1>
            Doces momentos começam com um <em>bolo caseiro</em>
          </h1>
          <p>{loja.slogan}</p>
          <div className="hero__botoes">
            <a href="#produtos" className="btn btn--primario">
              Ver cardápio
            </a>
            <a href="#sobre" className="btn btn--contorno">
              Conhecer
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__circulo">🎂</div>
          <span className="flutua f1">🍓</span>
          <span className="flutua f2">🍫</span>
          <span className="flutua f3">🧁</span>
        </div>
      </div>
    </section>
  );
}