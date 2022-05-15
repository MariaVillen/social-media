import axios from "axios";

const baseUrl = 'http://localhost:8080';

 export function login (user){
    return axios({
        url: `${baseUrl}/login`,
        method: 'POST',
        data: user,
    })
}

// other api calls...