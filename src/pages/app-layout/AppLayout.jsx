import classes from "./AppLayout.module.scss";
import Topbar from "../../components/topbar/Topbar.component";
import { Outlet } from "react-router-dom";
import {useEffect, useState} from 'react';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";

/**
 * @component
 * @name Layout
 * @description Navigation Bar and a main content that holds the differents pages.
 * @param {*} props props.onLogin: function to change if user is logged or not for logout function.
 * @returns
 */

function AppLayout ({rolesList}) {

  // Api
  const axiosPrivate = useAxiosPrivate();
  const {auth} = useAuth();

  // User load 
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [users, setUsers] = useState();

  // Load User from database

    useEffect(  () => {

      let isMounted = true;
      const controller = new AbortController();

      const getUsers = async ()=> {
        try {
          const response = await axiosPrivate.get("/user", {signal: controller.signal});
          const usersLoaded = response.data;
          console.log(usersLoaded);
          isMounted && setUsers(usersLoaded);
          console.log(users);
          // if (isMounted) {
          //   // Stock data
          //   const loggedUserIndex = usersLoaded.findIndex( (u) => auth.user.id === u.id);
          //   const myUser = usersLoaded[loggedUserIndex];
          //   console.log(myUser);
          //   setUser(myUser);
          //   console.log(user);
          //   // Erase logged user from users list
          //   usersLoaded.splice(loggedUserIndex, 1);
          //   setUsers(usersLoaded);
          //   setIsLoading(false);
          // } else {console.log("not mounted")}

        } catch(err) {
          
          if (err.response) {
             console.log(err.response.data);
              console.log(err.response.data.message);          
              console.log(err.response.status);
              console.log(err.response.headers);
          } else {
            console.log(`"ERROR": ${err.message}`);
          }
         
        }
      }

      getUsers();

      // if unmounted component
      return ()=> {
        console.log('abortado');
        isMounted=false;
        controller.abort();
      }
    }, []);


    return( 
        
    <div className={classes.container}>
        { (isLoading) 
          ? <div>Loading...</div> 
          : <>
              <div className={classes.navigation}>
                <Topbar rolesList={rolesList} userAvatar={user.profilePicture} />
              </div>
              
              <main className={classes.main}>
                <Outlet context={{user, users}}/>
              </main>
            </>
        }
    </div>
    )
}

export default AppLayout;
