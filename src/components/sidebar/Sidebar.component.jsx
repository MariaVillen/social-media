import classes from "./Sidebar.module.scss";
import UserCard from "../../components/userCard/UserCard.component";
import ProfileCard from "../profile-card/ProfileCard";
import ProfileForm from "../profile-form/ProfileForm.component";

// Sidebar of the home page.

export default function Sidebar(props) {

  return (
    <div className={`${classes.container} ${props.className}`}>
      "
      <ProfileCard
        userId = {props.user.idUsers}
        username= {props.user.name}
        cover= {props.user.coverPicture}
        avatar={props.user.profilePicture}
        bio={props.user.bio}
      />
      <div className={classes.wrapper}>
        <ProfileForm />
        <hr className={classes.separator} />
        <p className={classes.title}>Mes contacts</p>
        <ul className={classes.friendList}>
          {props.users.map((user) => {
            return (
              <li key={user.idUsers}>
                <UserCard
                  key={user.idUsers}
                  userId = {user.idUsers}
                  username={user.name}
                  profilePicture={user.profilePicture}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
