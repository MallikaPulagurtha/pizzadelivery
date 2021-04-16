import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postUserRegister } from "./api";

function Register() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    let userData = { email, username, password, phone };

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await postUserRegister(userData);
                setEmail("");
                setUsername("");
                setPassword("");
                setPhone("");

            }}>
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card login">
                            <div className="card-header">
                                <h3>Sign Up</h3>
                            </div>
                            <div className="card-body">
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" value={email} placeholder="Email Address" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" value={username} placeholder="Username" onChange={(e) => {
                                        setUsername(e.target.value)
                                    }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="password" className="form-control" value={password} placeholder="Password" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="number" className="form-control" value={phone} placeholder="Phone Number" onChange={(e) => {
                                        setPhone(e.target.value)
                                    }} />
                                </div>
                                <button className="btn float-right login_btn">Create Your Account</button>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Have an account?
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Link to="/login">Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register;