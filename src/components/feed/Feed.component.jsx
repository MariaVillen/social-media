import Post from '../post/Post.component';
import { Posts, Users} from '../../dummyData';
 
export default function Feed() {
  return (
      <>
        {Posts.map((p)=>{
          return <Post key={p.id} post={p} user={Users.filter((u)=> u.id === p.userId)[0]}/>
        })}
      </>
  )
}
