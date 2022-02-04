import { Link } from "react-router-dom"
import './navbars.css'
export default function navbar () {
    return (
        <nav className="navbar">
            <li>
                <Link to="/">Connect</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/sheeps">Collection</Link>
            </li>
            <li>
                <Link to="/goats">Explorer</Link>
            </li>
        </nav>
    )
}