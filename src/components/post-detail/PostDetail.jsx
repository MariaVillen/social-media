import PostAddComment from "../post-add-comment/PostAddComment.component";
import FeedComments from "../feed-comments/FeedComents.component";
function PostDetail(props) {
  return (

<div /* className={classes.commentContent}*/>
<PostAddComment />
<FeedComments onlyForPostId={props.post.id} />
</div>
  )   
}

export default PostDetail



