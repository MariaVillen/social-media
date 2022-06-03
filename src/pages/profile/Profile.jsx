import classes from "./Profile.module.scss";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { PersonRemove } from "@mui/icons-material";
import Feed from "../../components/feed/Feed.component";
import ProfileCard from "../../components/profile-card/ProfileCard";
import ProfileForm from "../../components/profile-form/ProfileForm.component";
import Avatar from "../../components/avatar/avatar.component";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";




// Profile Page

export default function Profile() {

  const {user, auth} = useAuth();
  const params = useParams();
  const profileId= parseInt(params.id);
  const [userProfile, setUserProfile] = useState({});
  const [notMyProfile, setNotMyProfile] = useState((auth.user.id !== profileId));
  const [userFollowed, setUserFollowed] = useState({});
  const [follower, setFollower] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const axiosPrivate = useAxiosPrivate();
 
  const addfollow = ()=>{
    console.log("click");

    axiosPrivate.post(`/user/${userProfile.id}/follows`, {
        followingId: auth.user.id,
        followedId: profileId
    }).then(
        (result)=> {
          console.log(result);
          setFollower(!follower);
        }
      )
    .catch((err)=>{
      console.log(err);
    });
    
  }

   // FOLLOWERS and USERid

     // FOLLOWERS and USERid
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get(`/user/${profileId}/follows`, {
          signal: controller.signal,
        });
        const userLoaded = response.data;
        if (isMounted) {
          // Stock data
          setUserProfile(userLoaded);
          setUserFollowed(userLoaded.follows);
          setNotMyProfile(()=> auth.user.id !== profileId);
          console.log("not my profile", notMyProfile);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(`"ERROR": ${err.message}`);
      }
    };

      getUser();
   
    // if unmounted component
    return () => {
      isMounted = false;
      controller.abort();
    };

  }, [params.id, follower]);

  return (
    <> 
    {isLoading? <p>Loading...</p>
    : <>
     <div className={classes.header}>
        <ProfileCard
          user = {userProfile}
          size="large"
        />
      </div>
      <div className={classes.content}>
        { notMyProfile 
          ? null 
          :
          <div className={classes.content_infoLoggedUser}>
          <h2>Informations Personnelles</h2>
          <ProfileForm userProfile = {userProfile}/>
          <hr />
          <p className={classes.title}>Mes contacts</p>
          <ul className={classes.friendList}>
            {userFollowed.map((u) => {
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
           </div>
        }
        <div className={classes.content_main}>
         {notMyProfile 
            ? <button onClick={addfollow} className = {classes.follow}>Suivre</button> 
            : null
         }
          <div className={classes.content_feed}>
            <Feed onlyForUserId={profileId} userProfile={userProfile} />
          </div>
        </div>
      </div>
      {/* </>: null
    } */}
    </>
}</>
  );
}
