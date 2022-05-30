import classes from "./Sidebar.module.scss";
import UserCard from "../../components/userCard/UserCard.component";
import ProfileCard from "../profile-card/ProfileCard";
import ProfileForm from "../profile-form/ProfileForm.component";
import useAuth from "../../hooks/useAuth";

// Sidebar of the home page.

export default function Sidebar({className, users}) {

  const {user} = useAuth();

  return (
    <div className={`${classes.container} ${className}`}>
      "
      <ProfileCard
        user={user}
      />
      <div className={classes.wrapper}>
        <ProfileForm user = {user}/>
        <hr className={classes.separator} />
        <p className={classes.title}>Mes contacts</p>
        {(users?.length)

          ? <ul className={classes.friendList}>
            {users.map((u) => {
              return (
                <li key={u.id}>
                  <UserCard
                    key={u.id}
                    userId = {u.id}
                    username={u.name}
                    profilePicture={u.profilePicture}
                  />
                </li>
              );}
            )}
            </ul>
          : <><p>Pas d'utilisateurs.</p></>
        }
  
      </div>
    </div>
  );
}
