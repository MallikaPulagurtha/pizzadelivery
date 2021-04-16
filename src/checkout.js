import React from "react"
import { Link } from "react-router-dom"


function Checkout() {
    return (
        <>
            <div className="row">
                <div className="col col-10"><h2></h2></div>
                <div classname="col col-2">
                    <button className="btn btn-danger generatebtn" onClick={() => {
                        window.localStorage.removeItem("app_token");
                    }}><a href="/login">Logout</a></button>
                </div>
            </div>
            <div class="header-content">
                <div class="inner">
                    <div class="intro">Thankyou for Purchasing</div>
                    <hr />
                    <h1>Your order is on the way...</h1>
                </div>
            </div>
        </>
    )
}

export default Checkout;