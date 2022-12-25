import "./NavBar.css"
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <ul className="navbar">
            <li>
                <a className="navbar-list " href="/">Camisas</a>
            </li>
            <li>
                <a className="navbar-list " href="/">Pantalones</a>
            </li>
            <li>
                <a className="navbar-list " href="/">Zapatos</a>
            </li>
            <li>
                <a className="navbar-list" href="/">
                <CartWidget/>
                </a>
            </li>
            
        </ul>
    )
}

export default NavBar