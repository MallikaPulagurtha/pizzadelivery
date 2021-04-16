import axios from "axios";

export function getUser(id) {
    return axios.get(`https://guvihackathon2.herokuapp.com/${id}`);
};

export function postPizza(id, pizza) {
    return axios.post(`https://guvihackathon2.herokuapp.com/${id}`, pizza);
};

export function GetPizza(id, pizza) {
    return axios.post(`https://guvihackathon2.herokuapp.com/${id}`, pizza);
};


export function postUserRegister(user) {
    return axios.post("https://guvihackathon2.herokuapp.com/register", user);
};

export function postUserLogin(user) {
    return axios.post("https://guvihackathon2.herokuapp.com/login", user);
};

