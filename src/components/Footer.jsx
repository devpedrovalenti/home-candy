import { loja } from "../data/config";

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer__inner">
        <div>
          <h3>🧁 {loja.nome}</h3>
          <p>{loja.cidade}</p>
        </div>
        <div>
          <p>
            WhatsApp:{" "}
            <a href={`https://wa.me/${loja.whatsapp}`} target="_blank" rel="noreferrer">
              fale com a gente
            </a>
          </p>
          <p>Instagram: {loja.instagram}</p>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {loja.nome}. Todos os direitos reservados.
      </p>
    </footer>
  );
}