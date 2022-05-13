import classes from "./Sidebar.module.scss";
import { Users } from '../../dummyData';
import UserCard from '../../components/userCard/UserCard.component';
import ProfileCard from '../profile-card/ProfileCard';
import ProfileForm from "../profile-form/ProfileForm.component";

export default function Sidebar({className}) {
  return (
    <div className={`${classes.container} ${className}`}>
      <ProfileCard/>
      <div className={classes.wrapper}>
       <ProfileForm/>
        <hr className={classes.separator}/>
        <p className={classes.title}>Mes contacts</p>
        <ul className={classes.friendList}>

          { Users.map(
            (user) => { 
              return <li>
                <UserCard key={user.id} username={user.username} profilePicture = {user.profilePicture} />
              </li>
            }
          ) }            

        </ul>

      </div>
    </div>
  );
}
