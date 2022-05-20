import Post from "../post/Post.component";
import { Posts, Users } from "../../dummyData";

/**
 * @function
 * @Name Feed
 * @description Render the list of posts
 * @param {Style} className The style to aply to the comment
 * @param {userId} props UserId => to gets Post only from a user.
 * @returns JsxElement
 */

export default function Feed(props, { className = "" }) {


  // Data Filter post by UserId
  const postList = props.onlyForUserId
    ? Posts.filter((p) => {
        return parseInt(props.onlyForUserId) === p.userId;
      })
    : Posts;

  return (
    <>
      {postList.map((p) => {
        return (
          <Post
            className={className}
            key={p.id}
            post={p}
            user={Users.filter((u) => u.id === p.userId)[0]}
          />
        );
      })}
    </>
  );
}
