import { Link, Outlet } from "react-router-dom";
import logoCompass from "../assets/compassslogo.png";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          Gerenciamento de estoque - CompaSSS
        </Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/items">Itens</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <img src={logoCompass} />
      </footer>
    </>
  );
}
