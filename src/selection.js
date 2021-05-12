import React from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button';

function Selection() {

    const params = useParams();
    console.log(params);
    const history = useHistory();
    return (
        <>
            <div class="header-content">
                <div>
                    <div class="intro">Yes, you do have Choice.</div>
                    <Link to={`/userdesk/${params.id}`}><button class="btn btn-light createpizza bg-transparent m-3">Buy Pizzas</button></Link>
                    <Link to={`/main/${params.id}`}><button class="btn btn-light createpizza bg-transparent m-3">Customize</button></Link>

                </div>
            </div>
        </>
    )
}

export default Selection;