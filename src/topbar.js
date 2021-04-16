import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark text-white topbar bg-transparent">
                <Link className="navbar-brand link" to="">Home</Link>
                <Link className="navbar-brand link" to="">Pizzas</Link>
                <Link className="navbar-brand link" to="">About Us</Link>
                <Link className="navbar-brand link" to="">Help</Link>
            </nav>
        </>
    )
}

export default TopBar;