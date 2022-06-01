import classes from "./Profile.module.scss";
import {useState, useEffect} from 'react';
import { useOutletContext, useParams } from "react-router-dom";
import { PersonRemove } from "@mui/icons-material";
import Feed from "../../components/feed/Feed.component";
import ProfileCard from "../../components/profile-card/ProfileCard";
import ProfileForm from "../../components/profile-form/ProfileForm.component";
import Avatar from "../../components/avatar/avatar.component";
import useAuth from "../../hooks/useAuth";




// Profile Page

export default function Profile() {

  const {user} = useAuth();
  const params = useParams();
  const profileId= parseInt(params.id);
  const {users} = useOutletContext();
  const [userProfile, setUserProfile] = useState({});
  const [notMyProfile, setNotMyProfile] = useState(false)


  const addfollow = ()=>{
    console.log("click");
  }


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
          user = {userProfile}
          size="large"
        />
      </div>
      <div className={classes.content}>
        { (notMyProfile) ? null :
        <div className={classes.content_infoLoggedUser}>
          <h2>Informations Personnelles</h2>
          <ProfileForm userProfile = {userProfile}/>
          <hr />
          <p className={classes.title}>Mes contacts</p>
          <ul className={classes.friendList}>
            {users.map((u) => {
              return (
                <li key={u.id}>
                  <Avatar
                    userId = {u.id}
                    username={u.name}
                    userImage={u.profilePicture}
                    sizePicture="80px"
                  />
                  <PersonRemove className={classes.icon} />
                </li>
              );
            })}
          </ul>
        </div>}
        <div className={classes.content_main}>
         {notMyProfile ? <button onClick={addfollow} className = {classes.follow}>Suivre</button> : null}
          <div className={classes.content_feed}>
            <Feed onlyForUserId={profileId} userProfile={userProfile} />
          </div>
        </div>
      </div>
      {/* </>: null
    } */}
    </>
  );
}
