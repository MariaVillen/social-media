import axios from "axios";
import useAuth from "../hooks/useAuth";


export const useApiData = () => {

    const REGISTER_URL = "/auth/signup";
    const LOGIN_URL="/auth/login";
    const USERS_URL="/user";
    const {auth} = useAuth();
    const api = axios.create({
        baseURL: 'http://localhost:3000/api',
        headers: {'Content-Type':'application/json',
        Authorization: `Bearer ${auth.accessToken}`}
    })
    
    

    const sendLogoutRequest = (user)=>{
    return api.post(REGISTER_URL,
        JSON.stringify(user));}

    const sendSignupRequest = (user) => {
    return api.post(REGISTER_URL,
        JSON.stringify(user));}

    const sendLoginRequest= (user)=> {
    return api.post(LOGIN_URL, JSON.stringify(user));
    }

    const getAllUsers = () => {
    return api.get(USERS_URL, {
        transformResponse: (res) => {
            return JSON.parse(res);          
        }
    });
    }

    const getUserById = (userId) => {
        console.log(userId);
    return api.get(USERS_URL + "/" + userId)
    }


     // return your data and updater functions 
     // so you can access them in your component
     return {
        sendLoginRequest,
        sendLogoutRequest,
        sendSignupRequest,
        getAllUsers,
        getUserById
     };
}



