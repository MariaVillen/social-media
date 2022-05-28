
import PostComment from "../../components/post-comment/PostComment.component";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {useState, useEffect} from "react";



export default function FeedComponent({ onlyForPostId, setTotalComments, totalComments,setLoadComments, loadComments, className = "" }) {

  // Api
  const axiosPrivate = useAxiosPrivate();

  
  // User load 
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

useEffect(  () => {

  let isMounted = true;
  const controller = new AbortController();

  let comment_url;
  if (onlyForPostId) {
    comment_url = "/comment/" + onlyForPostId; 
  } else {
    comment_url = "/comment";
  }

  const getComments = async ()=> {
    try {
      const response = await axiosPrivate.get(comment_url, {signal: controller.signal});
      const comments = response.data;

      if (isMounted) {
        // Stock data
        setComments(comments);
        setIsLoading(false);
      } 
    
    } catch(err) {
      console.log(`"ERROR": ${err.message}`);
    }
  }

  getComments();

  // if unmounted component
  return ()=> {
    isMounted=false;
    controller.abort();
  }
  }, [loadComments]);


  return (
    <>
      {isLoading
        ? <p>Loading...</p>
        : comments && (comments?.length > 0)
          ? comments.map((c) => {
            return (
             <PostComment
              className={className}
              key={c.id}
              postId={onlyForPostId}
              loadComments = {loadComments}
              setLoadComments = {setLoadComments}
              setTotalComments = {setTotalComments}
              totalComments ={totalComments}

              comment={c}/>
              )})
          : null
      }
    </>
  )
}
