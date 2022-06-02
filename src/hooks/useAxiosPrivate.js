import { axiosPrivate } from "../api/axios";
import { useEffect  } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const useAxiosPrivate = ()=>{

    const refresh = useRefreshToken();
    const { auth } = useAuth();
    let navigate = useNavigate();

    useEffect( () => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                  // first attempt
                if (!config.headers['authorization']) {
                    config.headers['authorization'] = `Bearer ${auth?.newAccessToken}` //Initial token our token after refresh
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use( 
            response => response, 

            // token expired 
            async (error) => {   
                const prevRequest = error?.config; // getting the previous request 
               
                if (error?.response?.status === 403 && !prevRequest?.sent){
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['authorization']=`Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                } else if (error?.response?.status === 401 && !prevRequest?.sent){
                    navigate("../login", { replace: true });
                }
                return Promise.reject(error);
            }
        );

        return () => {
           axiosPrivate.interceptors.request.eject(requestIntercept);
           axiosPrivate.interceptors.response.eject(responseIntercept);
        }

    },[auth, refresh])


    return axiosPrivate;// to call function.
}


export default useAxiosPrivate;

