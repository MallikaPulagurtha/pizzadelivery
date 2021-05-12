import React, { useEffect, useState } from "react"
import { getUser, deleteCustomPizza, deletePizza } from "./api"
import { Link, useParams, useHistory } from "react-router-dom"

function Pizza() {

    const params = useParams();
    console.log(params);
    const history = useHistory();
    const [pizza, setPizza] = useState([]);
    const [customPizza, setCustomPizza] = useState([]);

    useEffect(async () => {
        let pizzaDetails = await getUser(params.id);
        setCustomPizza(pizzaDetails.data.order);
        setPizza(pizzaDetails.data.pizzas);
    }, []);
    console.log(customPizza);
    console.log(pizza);

    let cost1 = 0;
    let cost2 = 0;

    pizza.map((item, index) => {
        cost2 += parseInt(item.cost);
    });

    customPizza.map((item, index) => {
        cost1 += parseInt(item.totalcost);
    });

    return (
        <>
            <form>
                {
                    cost1 + cost2 === 0 ? <h2 className="options">Your Cart is Empty</h2> : <div></div>
                }
                <h2 className="Title">Your Orders</h2>
                <div class="row">
                    {
                        pizza.map((item, index) => {
                            return <div className="col col-lg-4">
                                <div class="card text-white m-3 ordercard">
                                    <div class="card-header">
                                        <h4>Order {index + 1}</h4>
                                        <hr />
                                    </div>
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col col-3">
                                                <div><img id="orderimg" src={process.env.PUBLIC_URL + `/${item.pizza}.jpg`} /></div>
                                            </div>
                                            <div className="col col-9">
                                                <div className="opts">Pizza - {item.title}</div>
                                                <div className="opts">Category - {item.category}</div>
                                                <div className="opts">Cost - ${item.cost}</div>
                                                <div><button className="btn btn-outline-danger bg-transparent m-2" style={{ width: "80%" }} onClick={async () => {
                                                    await deletePizza(params.id, { title: item.title });
                                                }}>Remove Order</button></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        })
                    }
                </div>
                <h2 className="Title">Custom Made Orders</h2>
                <div class="row">
                    {
                        customPizza.map((item, index) => {
                            return <div className="col col-lg-3">
                                <div class="card text-white m-3 ordercard">
                                    <div class="card-header">
                                        <h4>Custom Order {index + 1}</h4>
                                        <hr />
                                    </div>
                                    <div class="card-body">
                                        <div className="opts">Base - {item.base}</div>
                                        <div className="opts">Sauce - {item.sauce}</div>
                                        <div className="opts">Cheese - {item.cheese}</div>
                                        <div className="opts">Veggies - {item.veggies}</div>
                                        <div className="opts">Cost - ${item.totalcost}</div>

                                        <div><button className="btn btn-outline-danger bg-transparent m-2" onClick={async () => {
                                            await deleteCustomPizza(params.id, { base: item.base });
                                        }}>Remove Order</button></div>
                                    </div>

                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="divider"><hr /></div>
            </form>
            <form onSubmit={(e) => {
                e.preventDefault();
                history.push(`/checkout/${params.id}`);
            }}>
                <h5>Total Cost - ${cost1 + cost2}</h5>
                <button type="submit" class="btn createpizza bg-transparent m-3">Order Now</button>
            </form >
            <Link to={`/selection/${params.id}`}><button class="btn btn-light createpizza bg-transparent m-3">Buy More</button></Link>

        </>
    )
}

export default Pizza;