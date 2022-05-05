import classes from './Feed.module.scss';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts, Users} from '../../dummyData';
 
export default function Feed() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Share/>

        {Posts.map((p)=>{
          return <Post key={p.id} post={p} user={Users.filter((u)=> u.id === p.userId)[0]}/>
        })}
      </div>
    </div>
  )
}
