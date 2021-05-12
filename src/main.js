import React, { useState, useEffect } from "react"
import { postCustomPizza, getUser } from "./api"
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

    let [orderid, setOrderid] = useState(0);

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
            <form className="center" onSubmit={async (e) => {
                e.preventDefault();
                let pizzaData = { base, sauce, cheese, veggies, totalcost };
                setOrderid(parseInt(orderid) + 1);
                console.log(orderid);
                await postCustomPizza(params.id, pizzaData);
                history.push(`/pizza/${params.id}`);
            }}>
                <div className="options">Select your Base</div>
                <div className="col col-lg-6">
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Thin" onClick={(e) => { setBase(e.target.value); setBasecost(10) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Thick" onClick={(e) => { setBase(e.target.value); setBasecost(20) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Custom" onClick={(e) => { setBase(e.target.value); setBasecost(30) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Baked" onClick={(e) => { setBase(e.target.value); setBasecost(40) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Wheat" onClick={(e) => { setBase(e.target.value); setBasecost(50) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Plain" onClick={(e) => { setBase(e.target.value); setBasecost(43) }} />

                </div>
                <div className="col col-lg-3">
                    <span>${basecost}</span>
                    <div class="form-group">
                        <label>Pizza Base</label>
                        <input type="text" class="form-control selection" value={base} />
                    </div>
                </div>

                <div className="options">Select your Sauce</div>
                <div className="col col-lg-6">
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Barbecue" onClick={(e) => { setSauce(e.target.value); setSaucecost(10) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Hot" onClick={(e) => { setSauce(e.target.value); setSaucecost(9) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Taco" onClick={(e) => { setSauce(e.target.value); setSaucecost(8) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Tomato" onClick={(e) => { setSauce(e.target.value); setSaucecost(19) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Cocktail" onClick={(e) => { setSauce(e.target.value); setSaucecost(22) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Red Hot" onClick={(e) => { setSauce(e.target.value); setSaucecost(19) }} />

                </div>
                <span>${saucecost}</span>
                <div class="col col-lg-3">
                    <div class="form-group">
                        <label>Pizza Sauce</label>
                        <input type="text" class="form-control" value={sauce} />
                    </div></div>

                <div className="options">Select the type of Cheese</div>
                <div className="col col-lg-6">
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Mozarella" onClick={(e) => { setCheese(e.target.value); setCheesecost(10) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Cheddar" onClick={(e) => { setCheese(e.target.value); setCheesecost(9) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Feda" onClick={(e) => { setCheese(e.target.value); setCheesecost(10) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Tomato" onClick={(e) => { setCheese(e.target.value); setCheesecost(15) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Classy" onClick={(e) => { setCheese(e.target.value); setCheesecost(10) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Parmesan" onClick={(e) => { setCheese(e.target.value); setCheesecost(20) }} />
                </div>
                <span>${cheesecost}</span>
                <div class="col col-lg-3">
                    <div class="form-group">
                        <label>Cheese</label>
                        <input type="text" class="form-control" value={cheese} />
                    </div></div>

                <div className="options">Select your veggies</div>
                <div className="col col-lg-6">

                    <input type="button" class="btn btn-light bg-transparent m-2" value="Tomatoes" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(10) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Onions" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(5) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Capsicum" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(6) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Mushroom" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(12) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Corn" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(19) }} />
                    <input type="button" class="btn btn-light bg-transparent m-2" value="Paneer" onClick={(e) => { setVeggies(e.target.value); setVeggiescost(13) }} />

                </div>
                <span>${veggiescost}</span>
                <div class="col col-lg-3">
                    <div class="form-group">
                        <label>Veggies</label>
                        <input type="text" class="form-control" value={veggies} />
                    </div></div>
                <div className="total m-2">Total Cost - $ {totalcost}</div>
                <button type="submit" class="btn createpizza bg-transparent m-4">Create Your Pizza</button>
                <Link to={`/pizza/${params.id}`}><button class="btn btn-light createpizza bg-transparent m-3">Your Cart</button></Link>
            </form >
        </>
    )
}

export default Main;