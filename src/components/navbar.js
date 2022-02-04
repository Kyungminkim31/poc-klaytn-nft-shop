import { Link } from "react-router-dom"
import './Navbars.css'
export default function Navbar () {
    return (
        <nav className="Navbar">
            <li>
                <Link to="/">Connect</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/Collection">Collection</Link>
            </li>
            <li>
                <Link to="/Explorer">Explorer</Link>
            </li>
        </nav>
    )
}