import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">

      <ul className="list-nav">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/sobrenos" className="nav-link">
            Sobre Nós
          </NavLink>
        </li>

        <li>
          <NavLink to="/produtos" className="nav-link">
            Produtos
          </NavLink>
        </li>

        <li>
          <NavLink to="/contato" className="nav-link">
            Contato
          </NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar