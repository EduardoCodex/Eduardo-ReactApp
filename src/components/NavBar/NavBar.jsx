import "./NavBar.css";
import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

function NavBar() {
  return (

    <nav>
    <ul className="navbar">
      <NavItem href="/">Inicio</NavItem>
      <Link to = "/category/Camisas">Camisas</Link>
      <Link to = "/category/Pantalones">Pantalones</Link>
      <Link to = "/category/Zapatos">Zapatos</Link>
      <Link to = "category//cart">
      <CartWidget />
      </Link>
      
    </ul>
  </nav>
  );
}

export default NavBar;
