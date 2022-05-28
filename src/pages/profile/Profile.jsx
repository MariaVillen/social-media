import classes from "./Profile.module.scss";
import {useState, useEffect} from 'react';
import { useOutletContext, useParams } from "react-router-dom";
import { PersonRemove } from "@mui/icons-material";
import Feed from "../../components/feed/Feed.component";
import ProfileCard from "../../components/profile-card/ProfileCard";
import ProfileForm from "../../components/profile-form/ProfileForm.component";
import UserCard from "../../components/userCard/UserCard.component";




// Profile Page

export default function Profile() {

  const params = useParams();
  const profileId= parseInt(params.id);
  const [user, users] = useOutletContext();
  const [userProfile, setUserProfile] = useState(user);
  const [notMyProfile, setNotMyProfile] = useState(false)


  useEffect(()=>{
  if (profileId === user.id) {
    setUserProfile(user);
    setNotMyProfile(false);
  } else {
    setUserProfile(users.filter((u)=> u.id === profileId)[0]);
    setNotMyProfile(true);
  }
},[params.id]);

  return (
    <> 
     <div className={classes.header}>
        <ProfileCard
          username={userProfile.name}
          cover={userProfile.coverPicture}
          avatar={userProfile.profilePicture}
          bio={userProfile.bio}
          sizeCard="large"
        />
      </div>
      <div className={classes.content}>
        { (notMyProfile) ? null :
        <div className={classes.content_infoLoggedUser}>
          <h2>Informations Personnelles</h2>
          <ProfileForm />
          <hr />
          <p className={classes.title}>Mes contacts</p>
          <ul className={classes.friendList}>
            {users.map((u) => {
              return (
                <li>
                  <UserCard
                    userId = {u.id}
                    username={u.name}
                    profilePicture={u.profilePicture}
                    sizePicture="80px"
                  />
                  <PersonRemove className={classes.icon} />
                </li>
              );
            })}
          </ul>
        </div>}
        <div className={classes.content_main}>
         {notMyProfile ? <button className = {classes.follow}>Suivre</button> : null}
          <div className={classes.content_feed}>
            <Feed onlyForUserId={userProfile.idUsers} user={userProfile} />
          </div>
        </div>
      </div>
      {/* </>: null
    } */}
    </>
  );
}
