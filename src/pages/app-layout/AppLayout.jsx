import classes from "./AppLayout.module.scss";
import Topbar from "../../components/topbar/Topbar.component";
import { Outlet } from "react-router-dom";
import {useEffect, useState} from 'react';
import  useApiData  from "../../api/api";
import useAuth from "../../hooks/useAuth";

/**
 * @component
 * @name Layout
 * @description Navigation Bar and a main content that holds the differents pages.
 * @param {*} props props.onLogin: function to change if user is logged or not for logout function.
 * @returns
 */

function AppLayout ({rolesList}) {


  // Get auth data
    const {auth} = useAuth();
  
  // User load 
    const {getAllUsers} = useApiData("private");
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState();
    const [users, setUsers] = useState();

  // Load User from database

    useEffect(  () => {

      let isMounted = true;
      const controller = new AbortController();

      const getUsers = async ()=> {
        try {
          const usersLoaded = await getAllUsers({signal: controller.signal});

          if (isMounted) {
            // Stock data
            const loggedUserIndex = usersLoaded.findIndex( (u) => user.id === u.id);
            setUser(usersLoaded[loggedUserIndex]);

            // Erase logged user from users list
            usersLoaded.splice(loggedUserIndex, 1);
            setUsers(usersLoaded);
            setIsLoading(false);
          } 
        } catch(err) {
          console.log(err);
        }
      }

      getUsers();

      return ()=> {
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
