import axios from "axios";
import {getToken} from '../helpers/auth-helpers';

const baseUrl = 'http://localhost:8080';

axios.interceptors.request.use(
    request => {
         if(request.url.includes('admin') || request.url.includes('profile')){  // whenever the application makes an HTTP request to one of the supporting services whose URLs
            request.headers['token'] = getToken();                              // include 'admin' or 'profile' Axios automatically attaches a header to the request with the
                                                                                // token stored in localStored (in this example).
         }
         return request;
    },
    error => {
          return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
       if(response.status === 200){
          return response;
       }
    },
    (err) => {
    if(err.response.status === 401 || err.response.data.message === '401 Unauthorized'){
    window.location.replace('/login');                                         //If the HTTP response is 401 redirect to /login.
    }
    }
 );

 export function login (user){
    return axios({
        url: `${baseUrl}/login`,
        method: 'POST',
        data: user,
    })
}

// other api calls...

