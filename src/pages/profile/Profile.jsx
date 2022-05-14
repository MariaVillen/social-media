import classes from "./Profile.module.scss";
import Feed from "../../components/feed/Feed.component";
import ProfileCard from "../../components/profile-card/ProfileCard";
import ProfileForm from "../../components/profile-form/ProfileForm.component";
import UserCard from "../../components/userCard/UserCard.component";
import { PersonRemove } from "@mui/icons-material";
import { Users } from "../../dummyData";


// Profile Page

export default function Profile(props) {
  return (
    <>
      <div className={classes.header}>
        <ProfileCard
          username="Mi Nombre"
          cover="/assets/covers/1.jpg"
          avatar="/assets/persons/8.jpeg"
          bio="Hello, my friends!"
          sizeCard="large"
        />
      </div>
      <div className={classes.content}>
        <div className={classes.content_infoLoggedUser}>
          <h2>Informations Personnelles</h2>
          <ProfileForm />
          <hr />
          <p className={classes.title}>Mes contacts</p>
          <ul className={classes.friendList}>
            {Users.map((user) => {
              return (
                <li key={user.id}>
                  <UserCard
                    username={user.username}
                    profilePicture={user.profilePicture}
                    sizePicture="80px"
                  />
                  <PersonRemove className={classes.icon} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.content_main}>
          <div className={classes.content_feed}>
            <Feed onlyForUserId="8" />
          </div>
        </div>
      </div>
    </>
  );
}
