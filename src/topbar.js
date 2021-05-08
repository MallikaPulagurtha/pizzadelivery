import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand text-light company">Pizzeria</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link active text-light navbar-brand link" to="/">Home</Link>
                        <Link class="nav-item nav-link active text-light navbar-brand link" to="/adminlogin">Admin</Link>
                        <Link class="nav-item nav-link text-light navbar-brand link" to="/register">Register</Link>
                        <Link class="nav-item nav-link text-light navbar-brand link" to="/login">Login</Link>
                        <Link class="nav-item nav-link text-light navbar-brand link" to="/" onClick={() => {
                            window.localStorage.removeItem("loginToken");
                            window.localStorage.removeItem("adminToken");

                        }}>Logout</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopBar;