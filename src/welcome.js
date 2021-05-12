import React from "react"
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

function Welcome() {
    return (
        <>
            <div class="header-content">
                <div className="center">
                    <div class="intro">Pizza, One Simple Place.</div>
                    {/* <Link to="/login"><Button variant="outlined" class="btn btn-primary welcomebtn bg-transparent" color="primary">Get Started <span>&nbsp; &hearts;</span> </Button></Link> */}
                    <Link to="/login"><button class="btn btn-light welcomebtn bg-transparent m-3">Get Started <span>&nbsp; &hearts;</span></button></Link>

                </div>
            </div>
        </>
    )
}

export default Welcome;