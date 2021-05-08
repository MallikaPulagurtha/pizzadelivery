import React, { useEffect, useState } from "react"
import { Link, useParams, useHistory } from "react-router-dom";
import { getAdminProduct, postPizza } from "./api";
import Button from '@material-ui/core/Button';

function UserDesk() {

    const params = useParams();
    console.log(params);

    const history = useHistory();

    const [prods, setProds] = useState([]);

    useEffect(async () => {
        let adminproducts = await getAdminProduct();
        setProds(adminproducts.data.products);
    }, []);
    console.log(prods);

    let [pizza, setPizza] = useState("");
    let [title, setTitle] = useState("");
    let [category, setCategory] = useState("");
    let [cost, setCost] = useState("");

    return (
        <>
            <section id="main">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    let pizzadet = { pizza, title, category, cost };
                    await postPizza(params.id, pizzadet);
                }}>
                    <div className="Title">Pizza Mania</div>
                    <div class="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Pizza Mania") {
                                    return <div className="col col-lg-3">
                                        <div class="card text-white m-3 ordercard">
                                            <div class="card-header">
                                                <h4>{item.title}</h4>
                                                {/* <hr /> */}
                                            </div>
                                            <div class="card-body">
                                                <div><img src={process.env.PUBLIC_URL + `/${item.pizza}.jpg`} /></div>
                                                <h4>Cost - ${item.cost}</h4>
                                                <div className="center"><button className="btn btn-light bg-transparent m-2" onClick={async (e) => {
                                                    setPizza(item.pizza);
                                                    setTitle(item.title);
                                                    setCategory(item.category);
                                                    setCost(item.cost);
                                                }}>Add to Cart</button></div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className="Title">Pizza Party</div>
                    <div class="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Pizza Party") {
                                    return <div className="col col-lg-3">
                                        <div class="card text-white m-3 ordercard">
                                            <div class="card-header">
                                                <h4>{item.title}</h4>
                                                {/* <hr /> */}
                                            </div>
                                            <div class="card-body">
                                                <div><img src={process.env.PUBLIC_URL + `/${item.pizza}.jpg`} /></div>
                                                <h4>Cost - ${item.cost}</h4>
                                                <div className="center"><button className="btn btn-light bg-transparent m-2" onClick={async () => {
                                                    setPizza(item.pizza);
                                                    setTitle(item.title);
                                                    setCategory(item.category);
                                                    setCost(item.cost);
                                                }}>Add to Cart</button></div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                </form>
                <Link to={`/pizza/${params.id}`}><button class="btn createpizza bg-transparent m-3">Go to Cart</button></Link>
            </section>
        </>
    )
}

export default UserDesk;