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
import SpinnerLoad from "../../components/spinner-load/SpinnerLoad";




// Profile Page

export default function Profile() {

  const {auth} = useAuth();
  const params = useParams();
  const profileId= parseInt(params.id);
  const [userProfile, setUserProfile] = useState({});
  const [notMyProfile, setNotMyProfile] = useState((auth.user.id !== profileId));
  
  //List of followed users.
  const [usersFollowed, setUsersFollowed] = useState({});

  const [follower, setFollower] = useState(false);
  const [onChangeFollow, setOnChangeFollow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const axiosPrivate = useAxiosPrivate();

  const addfollow = ()=>{
    axiosPrivate.post(`/user/${userProfile.id}/follows`, {
        followingId: auth.user.id,
        followedId: profileId
    }).then(
        (result)=> {
          console.log(result);
          setOnChangeFollow(!onChangeFollow);
        }
      )
    .catch((err)=>{
      console.log(err);
    });
    
  }

     // FOLLOWERS and USERid
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get(`/user/${profileId}`, {
          signal: controller.signal,
        });
        const userLoaded = response.data;

        let followers;
        if (auth.user.id === profileId) {
        followers = await axiosPrivate.get(`/user/${auth.user.id}/follows`);
        console.log(followers.data);
        }

        if (isMounted) {
          // Stock data
          setNotMyProfile(()=> auth.user.id !== profileId);
          setUserProfile(userLoaded);
          if (!notMyProfile) {
          setUsersFollowed(followers.data);
          }
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
    console.log("USERS FOLLOWED ", usersFollowed);
  }, [profileId, onChangeFollow, notMyProfile]);


  return (
    <> 
    {isLoading
      ? <SpinnerLoad/>
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
            : <div className={classes.content_infoLoggedUser}>
                <h2>Informations Personnelles</h2>
                <ProfileForm userProfile = {userProfile}/>
                <hr />
                <p className={classes.title}>Mes contacts</p>
                <ul className={classes.friendList}>
                  { usersFollowed?.map((u) => {
                    return (
                      <li key={u.id}>
                        <Avatar
                          userId = {u.id}
                          username={u.name}
                          userImage={u.profilePicture}
                          sizePicture="80px"
                        />
                        <div className={classes.friendList_name}>
                          <span>{u.name}</span>
                          <span>{u.lastName}</span>
                        </div>

                        <PersonRemove onClick={addfollow} className={classes.icon} />
                      
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
              <Feed onlyForUserId={profileId} loadPosts = {params.id} userProfile={userProfile} />
            </div>
          </div>
        </div>
      </>
  }</>
  );
}
