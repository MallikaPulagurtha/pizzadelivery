import axios from "axios";

//USER METHODS
export function postUserRegister(user) {
    return axios.post("http://localhost:3001/register", user);
}

export function postUserLogin(user) {
    return axios.post("http://localhost:3001/login", user);
};

export function getUser(id) {
    return axios.get(`http://localhost:3001/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function postPizza(id, pizza) {
    return axios.post(`http://localhost:3001/pizza/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function postCustomPizza(id, pizza) {
    return axios.post(`http://localhost:3001/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function GetPizza(id, pizza) {
    return axios.post(`http://localhost:3001/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function deletePizza(id, order) {
    return axios.put(`http://localhost:3001/delpizza/${id}`, order, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
}

export function deleteCustomPizza(id, order) {
    return axios.put(`http://localhost:3001/delcustompizza/${id}`, order, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
}

//ADMIN METHODS

export function postAdminLogin(user) {
    return axios.post("http://localhost:3001/adminlogin", user);
};

export function postAdminProduct(id, pizza) {
    return axios.post(`http://localhost:3001/adminpost/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function postAdminPizza(id, pizza) {
    return axios.post(`http://localhost:3001/adminpostpizza/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function getAdminProduct() {
    return axios.get(`http://localhost:3001/admingetprod`, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};





