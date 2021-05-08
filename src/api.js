import axios from "axios";

//USER METHODS
export function postUserRegister(user) {
    return axios.post("https://guvihackathon2.herokuapp.com/register", user);
}

export function postUserLogin(user) {
    return axios.post("https://guvihackathon2.herokuapp.com/login", user);
};

export function getUser(id) {
    return axios.get(`https://guvihackathon2.herokuapp.com/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function postPizza(id, pizza) {
    return axios.post(`https://guvihackathon2.herokuapp.com/pizza/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function postCustomPizza(id, pizza) {
    return axios.post(`https://guvihackathon2.herokuapp.com/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function GetPizza(id, pizza) {
    return axios.post(`https://guvihackathon2.herokuapp.com/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function deletePizza(id, order) {
    return axios.put(`https://guvihackathon2.herokuapp.com/delpizza/${id}`, order, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
}

export function deleteCustomPizza(id, order) {
    return axios.put(`https://guvihackathon2.herokuapp.com/delcustompizza/${id}`, order, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
}

//ADMIN METHODS

export function postAdminLogin(user) {
    return axios.post("https://guvihackathon2.herokuapp.com/adminlogin", user);
};

export function postAdminProduct(id, pizza) {
    return axios.post(`https://guvihackathon2.herokuapp.com/adminpost/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function postAdminPizza(id, pizza) {
    return axios.post(`https://guvihackathon2.herokuapp.com/adminpostpizza/${id}`, pizza, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};

export function getAdminProduct() {
    return axios.get(`https://guvihackathon2.herokuapp.com/admingetprod`, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
};





