import React, { useState } from "react";
import { postAdminProduct } from "./api";
import { Link, useParams, useHistory } from "react-router-dom"


function AdminDesk() {

    const params = useParams();
    console.log(params);

    const [product, setProduct] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [cost, setCost] = useState("");
    const [number, setNumber] = useState("");
    let productData = { product, title, category, cost, number };

    return (
        <>
            <h2 className="options">Add Products</h2>

            <form className="center" onSubmit={async (e) => {
                e.preventDefault();
                await postAdminProduct(productData, params.id);
                console.log(productData);
                setProduct("");
                setTitle("");
                setCategory("");
                setNumber("");
            }}>
                <div className="col-lg-4 input-group from-group m-3">
                    <input type="text" className="form-control" placeholder="Enter Pizza to add" value={product} onChange={(e) => {
                        setProduct(e.target.value);
                    }}></input>
                </div>
                <div className="col-lg-4 input-group from-group m-3">
                    <input type="text" className="form-control" placeholder="Title of the Pizza" value={title} onChange={(e) => {
                        setTitle(e.target.value);
                    }}></input>
                </div>
                <div className="col-lg-4 input-group from-group m-3">
                    <input type="text" className="form-control" placeholder="Category" value={category} onChange={(e) => {
                        setCategory(e.target.value);
                    }}></input>
                </div>
                <div className="col-lg-4 input-group from-group m-3">
                    <input type="text" className="form-control" placeholder="Cost" value={cost} onChange={(e) => {
                        setCost(e.target.value);
                    }}></input>
                </div>
                <div className="col-lg-4 input-group from-group m-3">
                    <input type="text" className="form-control" placeholder="Number available" value={number} onChange={(e) => {
                        setNumber(e.target.value);
                    }}></input>
                </div>
                <div className="col-lg-4 m-3">
                    <button type="submit" className="btn btn-light bg-transparent" style={{ width: "100%" }}>Add Product</button>
                </div>
            </form>
            <div className="center">
                <button className="btn btn-light bg-transparent center">View available Products</button>
            </div>

        </>
    )
}

export default AdminDesk;