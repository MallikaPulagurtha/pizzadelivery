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
                    <Button variant="outlined" className="Button m-3" color="primary" style={{ color: "white", border: "1px solid white" }} onClick={() => { history.push(`/userdesk/${params.id}`) }}>Buy Pizzas</Button>
                    <span>&hearts;</span>
                    <Button variant="outlined" className="Button m-3" color="primary" style={{ color: "white", border: "1px solid white" }} onClick={() => { history.push(`/main/${params.id}`) }}>Customise</Button>
                </div>
            </div>
        </>
    )
}

export default Selection;