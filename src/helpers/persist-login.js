import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = ()=> {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();
    console.log("access token en auth: ", auth.accessToken);

    useEffect(()=>
    {
        const verifyRefreshToken = async () => {
            try {
                const response = await refresh(); // get access token before we get the require auth component
                console.log(response);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false); // prevent endless loadingloop
            }
        }

        // If no access token at all in Auth (avoid to request the refersh token every time we request the protected pages).

        !auth?.accessToken 
            ? verifyRefreshToken() 
            : setIsLoading(false); 
    }, []);

    useEffect(()=>{
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    },[isLoading])

    return (
        <>
            { isLoading
                ? <p>Loading... {auth.userId}</p>
                : <Outlet />
            }
        </>
    )
}

export default PersistLogin;