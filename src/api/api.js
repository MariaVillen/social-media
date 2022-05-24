//import {useAxiosPublic, useAxiosPrivate} from "../hooks/useAxiosPrivate";
import axios from "axios";

const useApiData = (type) => {
    const REGISTER_URL = "/auth/signup";
    const LOGIN_URL="/auth/login";
    const USERS_URL="/user";
    const POSTS_URL="/post";

    const api = axios.create({
        baseURL: "http:/localhost:3000/api",
        headers: {'Content-Type':'application/json'},
        withCredentials: true
    });

    console.log("api es public")
    // Authentication

    const sendLogoutRequest = (user)=>{
    return api.post(REGISTER_URL,
        JSON.stringify(user));}

    const sendSignupRequest = (user) => {
    return api.post(REGISTER_URL,
        JSON.stringify(user));}

    const sendLoginRequest= (user)=> {
    return api.post(LOGIN_URL, JSON.stringify(user));
    }

    const getRefresh = ()=> {
        return api.get('/refresh');
    }

    // Users
    const getAllUsers = (opt) => {
    return api.get(USERS_URL, {
        opt,
        transformResponse: (res) => {
            return JSON.parse(res);          
        }
    });
    }

    const getUserById = (userId) => {
        console.log(userId);
    return api.get(USERS_URL + "/" + userId)
    }

    const updateUser = (user, idUser) => {
        return api.put(USERS_URL + "/" + idUser, user);
    }


    // Post
    const createPost = (post) => {
        return api.post(POSTS_URL, post);
    }


     // return your data and updater functions 
     // so you can access them in your component
     return {
        // Authentication
        sendLoginRequest,
        sendLogoutRequest,
        sendSignupRequest,
        getRefresh,
        // Users
        getAllUsers,
        getUserById,
        updateUser,
        // Posts
        createPost
     };
}

export default useApiData;

