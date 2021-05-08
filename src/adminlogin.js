import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postAdminLogin } from "./api";

function AdminLogin(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [data, setData] = useState("");

    let userData = { email, password };

    let history = useHistory();

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault();
                try {
                    let loginData = await postAdminLogin(userData);
                    window.localStorage.setItem("adminToken", loginData.data.token);
                    console.log(loginData.data);

                    let token = loginData.data.token;
                    if (token) {
                        history.push(`/admindesk/${loginData.data.id}`);
                    }
                    else {
                        alert("Email or Password is incorrect");

                        history.push('/login');
                    }

                } catch (error) {
                    console.log(error);
                }
                setEmail("");
                setPassword("");

            }}>
                <div className="container mt-5">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card login">
                            <div className="card-header">
                                <h3>Administration Credentials</h3>
                            </div>
                            <div className="card-body">
                                <div className="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                    </div>
                                    <input type="text" className="form-control" value={email} placeholder="Email Address" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                                </div>
                                <div className="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" value={password} placeholder="Password" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                </div>
                                <button className="btn login_btn">Login as an Admin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default AdminLogin;