
import {useEffect, useState} from 'react';
import  useApiData from "../../api/api";
import UserCard from '../userCard/UserCard.component';
import classes from './UserPannel.module.scss';

function UserPannel() {

  const {getAllUsers} = useApiData("private");

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    getAllUsers().then(
      (usersLoaded) => {setUsers(usersLoaded.data); setIsLoading(false);console.log(users)}
    ).catch((err) => {
      console.log(err.message);
    });
  }, []);


  return (
  
  
    <div> 
      <h2>Inactives Users </h2>
      <ul className={classes.friendList}>
      {!isLoading ? 
        users.map((u) => {
          return <li className = {classes.activeCard}>
            <div className={classes.activeCard_container}>
            <div className={classes.activeCard_user}>
            <UserCard  key={u.id} username={u.name} profilePicture={u.profilePicture} hideName/>
            <div><span>{u.name}</span><span>{u.lastName}</span></div>
            </div>
            <div>Email: {u.email}</div>
            <div>Date d'inscription: {u.createdAt}</div>
            </div>
            <div className= {classes.activeCard_action}>
              <label for={`userActive${u.id}`}> Activé: </label>
              <input id={`userActive${u.id}`} type="checkbox" checked={ u.isActive? true: false}/>
            </div>
            </li>
        })
        : <p> Not users founded </p>
      }</ul>
    </div>

  )
}
 export default UserPannel;