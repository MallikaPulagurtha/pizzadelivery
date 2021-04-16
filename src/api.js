import axios from "axios";

export function getUser(id) {
    return axios.get(`http://localhost:2000/${id}`);
};

export function postPizza(id, pizza) {
    return axios.post(`http://localhost:2000/${id}`, pizza);
};

export function GetPizza(id, pizza) {
    return axios.post(`http://localhost:2000/${id}`, pizza);
};


export function postUserRegister(user) {
    return axios.post("http://localhost:2000/register", user);
};

export function postUserLogin(user) {
    return axios.post("http://localhost:2000/login", user);
};

