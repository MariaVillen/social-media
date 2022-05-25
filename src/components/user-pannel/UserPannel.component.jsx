
import {useEffect, useState} from 'react';
import  api from "../../api/axios";
import Avatar from '../avatar/avatar.component';
import classes from './UserPannel.module.scss';

function UserPannel() {

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    api.get("/user", {transformResponse:(res) => {return JSON.parse(res)}}).then(
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
            <Avatar  key={u.id} username={u.name} userImage={u.profilePicture} userId={u.id}/>
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