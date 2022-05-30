import classes from "./Post.module.scss";
import { useEffect, useState } from "react";
import {
  Edit,
  Delete,
  Report,
  Favorite,
  FavoriteBorderOutlined,
  Comment,
} from "@mui/icons-material";
import Share from "../share/Share.component";
import UserCard from "../../components/userCard/UserCard.component";
import FeedComments from "../../components/feed-comments/FeedComents.component";
import PostAddComment from "../../components/post-add-comment/PostAddComment.component";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";

export default function Post({post, loadPosts, isLoadPosts, className = "" }) {
  // Likes
  const [like, setLike] = useState(post.totalLikes);
  const [isLiked, setIsLiked] = useState(false);
  const {auth, user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  // Api
  const axiosPrivate = useAxiosPrivate();

  const [totalComments, setTotalComments] = useState(post.totalComments);


  const likeHandler = async (e) => {
   
    try{
    const result = await axiosPrivate.post(`/post/${post.id}/like`, {
      userId: auth.user.id
    }).then(
      ()=> {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);    
      }
    )
  } catch(err){
    console.log(err);
  }
}

  // Edit
  const [onEdit, setOnEdit] = useState(false);

  const [loadComments, setLoadComments] = useState([]);

  
  const editHandler = () => {
    setOnEdit(true);
  };

  const [onCommentView, setOnCommentView] = useState(false);

  //Coments
  const commentHandler = () => {
    setOnCommentView(!onCommentView);
  };


  //Delete Post
 const deleteHandler = async (e)=>{

  try {
    const result = await axiosPrivate.delete(`/post/${post.id}`, {
      where:{
        id: post.id
      }
    })
    if (result) {
      isLoadPosts(!loadPosts);
      console.log("remove");
    } else { console.log("Error")}

  } catch(err) {
    console.log("message: ", err);
  }
 }


  //Report Post
const reportHandler = ()=>{

}


useEffect(  () => {

  let isMounted = true;
  const controller = new AbortController();

  const getLike = async ()=> {
    try {
      const response = await axiosPrivate.get(`/post/${post.id}/like`, {signal: controller.signal});
      const onLike = response.data;

      if (isMounted) {
        // Stock data
        if (onLike) {
          setIsLiked(onLike.message);
        }
        setIsLoading(false);
    
      }
    }  catch(err) {
       console.log("ERROR: ", err.message);
    }
  }

  getLike();

  // if unmounted component
  return ()=> {
    isMounted=false;
    controller.abort();
  }
}, [loadPosts]);

  return (
    <div className={`${classes.post} ${className}`}>
      <div className={classes.post_wrapper}>
        {onEdit ? (
          <div className={classes.modal}>
            <Share
              isOpen={setOnEdit}
              content={post.content}
              photo={post.attachement}
              userId = {post.userId}
              elementId={post.id}
              isLoadPosts={isLoadPosts}
              loadPosts={loadPosts}
            />
          </div>
        ) : null}
        <div className={classes.post_header}>
          <div className={classes.post_profile}>
            <UserCard
              hideName
              userId={post.user.id}
              profilePicture={post.user.id === user.id? user.profilePicture: post.user.profilePicture}
              username={post.user.name}
            />
            <span className={classes.post_date}>{post.createdAt}</span>
          </div>
          <div className={classes.post_menu}>
            {auth.user.id === post.userId 
            ? <div className={classes.post_menu_user}> 
              <span className={classes.post_menu_content_icon}>
              <Delete onClick={deleteHandler} className={classes.post_menu_icon} />
              </span>

              <span className={classes.post_menu_content_icon}>
                <Edit onClick={editHandler} className={classes.post_menu_icon} />
              </span></div>
            : null
            }
            {auth.user.id !== post.userId 
             ?<span className={classes.post_menu_content_icon}>
             <Report onClick={reportHandler} className={classes.post_menu_icon} />
           </span>
             : null
            }
            
          </div>
        </div>
        <div className={classes.post_body}>
          <span className={classes.post_body_text}>{post.content}</span>
          {post?.attachement 
            ? <img src={post.attachement} alt="Description" /> 
              : null }
        </div>
        <div className={classes.post_footer}>
          <div className={classes.post_likes}>
            <button className={classes.favorite} onClick={likeHandler}>
              {isLiked ? (
                <Favorite className={classes.likeIcon} />
              ) : (
                <FavoriteBorderOutlined className={classes.likeIcon} />
              )}
            </button>
            <span className={classes.likeCounter}>{like}</span>
          </div>
          <div className={classes.post_comments}>
            <button className={classes.comment} onClick={commentHandler}>
              <Comment className={classes.commentIcon} />
              <div className={classes.post_comments}>
                <span>{totalComments} commentaires</span>
              </div>
            </button>
          </div>
        </div>
        {onCommentView ? (
          <div className={classes.commentContent}>
            <PostAddComment  totalComments = {totalComments} loadComments = {loadComments}
              setLoadComments = {setLoadComments} setTotalComments = {setTotalComments} postId={post.id} />
            <FeedComments 
              loadComments = {loadComments}
              setLoadComments = {setLoadComments} 
              setTotalComments = {setTotalComments}
              totalComments = {totalComments}
              onlyForPostId={post.id} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
