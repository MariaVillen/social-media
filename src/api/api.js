import axios from "axios";
const REGISTER_URL = "/auth/signup";
const LOGIN_URL="/auth/login";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {'Content-Type':'application/json'},
    // withCredentials: true
})

export function signup (user) {
    return api.post(REGISTER_URL,
        JSON.stringify(user));
}

export function login (user){
    return api.post(LOGIN_URL, JSON.stringify(user));
}

// other api calls...