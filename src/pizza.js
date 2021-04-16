import React, { useEffect, useState } from "react"
import { getUser } from "./api"
import { Link, useParams, useHistory } from "react-router-dom"

function Pizza() {

    const params = useParams();
    const history = useHistory();
    const [pizza, setPizza] = useState([]);


    useEffect(async () => {
        let pizzaDetails = await getUser(params.id);
        setPizza(pizzaDetails.data.order[0]);
    }, []);
    console.log(pizza);


    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                history.push(`/checkout/${params.id}`);
            }}>
                <div className="row">
                    <div className="col col-10"><h2>Your Custom Pizza</h2></div>
                    <div classname="col col-2">
                        <button className="btn btn-danger generatebtn" onClick={() => {
                            window.localStorage.removeItem("app_token");
                        }}><a href="/login">Logout</a></button>
                    </div>
                </div>
                <table>
                    <tr>
                        <td>Pizza Item</td>
                        <td>Details</td>
                    </tr>
                    <tr>
                        <td>Base</td>
                        <td>{pizza.base}</td>
                    </tr>
                    <tr>
                        <td>Sauce</td>
                        <td>{pizza.sauce}</td>
                    </tr>
                    <tr>
                        <td>Cheese</td>
                        <td>{pizza.cheese}</td>
                    </tr>
                    <tr>
                        <td>Veggies</td>
                        <td>{pizza.veggies}</td>
                    </tr>
                    <tr>
                        <td>Total Price</td>
                        <td>${pizza.totalcost}</td>
                    </tr>
                </table>
                <div className="col col-6">
                    <button type="submit" class="btn btn-light bg-transparent buynow">Buy Now</button>
                </div>
            </form>
        </>
    )
}

export default Pizza;