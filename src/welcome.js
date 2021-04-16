import React from "react"
import { Link } from "react-router-dom"

function Welcome() {
    return (
        <>
            <div class="header-content">
                <div class="inner">
                    <div class="intro">Pizza, One Simple Place!</div>
                    <Link to="/register" class="btn btn-primary welcomebtn bg-transparent">Get Started</Link>
                </div>
            </div>
        </>
    )
}

export default Welcome;