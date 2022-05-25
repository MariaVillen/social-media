import Post from "../post/Post.component";
import classes from "./Feed.module.scss";
import { Posts, Users } from "../../dummyData";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";

// Feed of Posts List

export default function Feed({onlyForUserId,  className = "" }) {

  // Api
  const axiosPrivate = useAxiosPrivate();
  const {auth} = useAuth();

  // User load 
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState();


  useEffect(  () => {

    let isMounted = true;
    const controller = new AbortController();

    let post_url;
    if (onlyForUserId) {
      post_url = "/post/" + onlyForUserId; 
    } else {
      post_url = "/post";
    }

    const getPosts = async ()=> {
      try {
        const response = await axiosPrivate.get(post_url, {signal: controller.signal});
        const posts = response.data;

        if (isMounted) {
          // Stock data
          setPosts(posts);
          setIsLoading(false);
        } 

      } catch(err) {
        console.log(`"ERROR": ${err.message}`);
      }
       
    }

    getPosts();

    // if unmounted component
    return ()=> {
      isMounted=false;
      controller.abort();
    }
  }, []);

  return (
    <>
      { isLoading 
          ? <p>Loading...</p>
          : posts && (posts?.length > 0)
              ? posts.map(
                (p) => {
                  return (
                  <Post
                    className={className}
                    key={p.id}
                    post={p}
                    user={Users.filter((u) => u.id === p.userId)[0]}
                  />
                )})
              : <p className={classes.notFound}>Pas de publications trouvées.</p>
      }           
    </>
  );
}
