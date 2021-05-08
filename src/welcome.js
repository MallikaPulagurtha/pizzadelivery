import React from "react"
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

function Welcome() {
    return (
        <>
            <div class="header-content">
                <div>
                    <div class="intro">Pizza, One Simple Place.</div>
                    <Link to="/login"><Button variant="outlined" class="btn btn-primary welcomebtn bg-transparent" color="primary">Get Started <span>&nbsp; &hearts;</span> </Button></Link>
                </div>
            </div>
        </>
    )
}

export default Welcome;