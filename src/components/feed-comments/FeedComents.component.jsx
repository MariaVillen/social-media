import { Comments, Users } from "../../dummyData";
import PostComment from "../../components/post-comment/PostComment.component";

/**
 * @function
 * @Name FeedComponent
 * @description Render comments from a post.
 * @param {Style} className The style to aply to the comment
 * @param {*} props Require the PostId to gets the comments
 * @returns JsxElement
 */

export default function FeedComponent(props, { className = "" }) {
  // Data Filter comment by post.
  const commentList = props.onlyForPostId
    ? Comments.filter((c) => parseInt(props.onlyForPostId) === c.postId)
    : Comments;

  return (
    <>
      {commentList.map((c) => {
        return (
          <PostComment
            className={className}
            key={c.id}
            postId={props.id}
            user={Users.filter((u) => u.id === c.userId)[0]}
            comment={c}
          />
        );
      })}
    </>
  );
}
