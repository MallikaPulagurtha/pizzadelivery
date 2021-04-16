import React, { useState, useEffect } from "react"
import { postPizza, getUser } from "./api"
import { Link, useParams, useHistory } from "react-router-dom"

function Main() {
    const params = useParams();
    const history = useHistory();
    console.log(params);

    const [base, setBase] = useState("");
    const [basecost, setBasecost] = useState(0);
    const [sauce, setSauce] = useState("");
    const [saucecost, setSaucecost] = useState(0);
    const [cheese, setCheese] = useState("");
    const [cheesecost, setCheesecost] = useState(0);
    const [veggies, setVeggies] = useState("");
    const [veggiescost, setVeggiescost] = useState(0);

    let totalcost = basecost + saucecost + cheesecost + veggiescost;


    useEffect(async () => {
        let user = await getUser(params.id, {
            headers: {
                authorization: window.localStorage.getItem("app_token")
            }
        }
        );
    }, []);

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault();
                let pizzaData = { base, sauce, cheese, veggies, totalcost };
                await postPizza(params.id, pizzaData);
                history.push(`/pizza/${params.id}`);
            }}>
                <div className="row">
                    <div className="col col-8"><h2>Select your Base</h2></div>
                    <div className="col col-2"><Link to={`/pizza/${params.id}`} className="btn btn-info generatebtn">Your Cart</Link></div>
                    <div classname="col col-2">
                        <button className="btn btn-danger generatebtn" onClick={() => {
                            window.localStorage.removeItem("app_token");
                        }}><a href="/login">Logout</a></button>
                    </div>
                </div>
                <input type="button" class="btn btn-light bg-transparent m-3" value="Thin" onClick={(e) => { setBase(e.target.value); setBasecost(10) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Thick" onClick={(e) => { setBase(e.target.value); setBasecost(20) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Custom" onClick={(e) => { setBase(e.target.value); setBasecost(30) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Baked" onClick={(e) => { setBase(e.target.value); setBasecost(40) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Wheat" onClick={(e) => { setBase(e.target.value); setBasecost(50) }} />
                <span>${basecost}</span>
                <div class="col col-6">
                    <div class="form-group">
                        <label>Pizza Base</label>
                        <input type="text" class="form-control" value={base} />
                    </div></div>

                <h2>Select your Sauce</h2>
                <input type="button" class="btn btn-light bg-transparent m-3" value="Barbecue" onClick={(e) => { setSauce(e.target.value); setSaucecost(10) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Hot" onClick={(e) => { setSauce(e.target.value); setSaucecost(9) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Taco" onClick={(e) => { setSauce(e.target.value); setSaucecost(8) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Tomato" onClick={(e) => { setSauce(e.target.value); setSaucecost(19) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Cocktail" onClick={(e) => { setSauce(e.target.value); setSaucecost(22) }} />
                <span>${saucecost}</span>
                <div class="col col-6">
                    <div class="form-group">
                        <label>Pizza Sauce</label>
                        <input type="text" class="form-control" value={sauce} />
                    </div></div>

                <h2>Select the type of Cheese</h2>
                <input type="button" class="btn btn-light bg-transparent m-3" value="Mozarella" onClick={(e) => { setCheese(e.target.value); setCheesecost(10) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Cheddar" onClick={(e) => { setCheese(e.target.value); setCheesecost(9) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Feda" onClick={(e) => { setCheese(e.target.value); setCheesecost(10) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Tomato" onClick={(e) => { setCheese(e.target.value); setCheesecost(15) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Parmesan" onClick={(e) => { setCheese(e.target.value); setCheesecost(20) }} />
                <span>${cheesecost}</span>
                <div class="col col-6">
                    <div class="form-group">
                        <label>Cheese</label>
                        <input type="text" class="form-control" value={cheese} />
                    </div></div>

                <h2>Select your veggies</h2>
                <input type="button" class="btn btn-light bg-transparent m-3" value="Tomatoes" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(10) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Onions" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(5) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Capsicum" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(6) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Mushroom" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(12) }} />
                <input type="button" class="btn btn-light bg-transparent m-3" value="Corn" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(19) }} />
                <span>${veggiescost}</span>
                <div class="col col-6">
                    <div class="form-group">
                        <label>Veggies</label>
                        <input type="text" class="form-control" value={veggies} />
                    </div></div>
                <div className="row">
                    <div className="col col-4 total">
                        <h3>Total Cost - $ {totalcost}</h3>
                    </div>
                    <div className="col col-8">
                        <button type="submit" class="btn btn-light bg-transparent createpizza">Create Your Pizza</button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default Main;