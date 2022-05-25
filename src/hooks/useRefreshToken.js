import axios from "../api/axios";
import useAuth from './useAuth';


const useRefreshToken = () => {

  const {setAuth } = useAuth();


  const refresh = async ()=>{
    try{
    const response = await axios.get("/refresh", {withCredentials: true});

    if (response) {
      console.log("response of useRefreshToken", response);
    setAuth( prev => {
        // take the previous state and replace it with the new accessToken.
        console.log(JSON.stringify(prev));
        console.log(JSON.stringify(response));
        return { 
          ...prev,
          user: {id:response.data.userId, roles: response.data.userRole},
          accessToken: response.data.accessToken}
    });

    return response.data.accessToken;
  } else {
    console.log("no response from refresh token");
  }
} catch(err) {
  console.log(err);
}
  }


  return refresh;
}

export default useRefreshToken