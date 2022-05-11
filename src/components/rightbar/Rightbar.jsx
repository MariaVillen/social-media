import classes from './Rightbar.module.scss';
import { Users, Posts} from '../../dummyData';
import Post from '../post/Post';


export default function Rightbar({className}) {
  return (
    <div className={`${classes.container} ${className}`}>
      <p className={classes.title}> Top Comments Posts!</p>
      {Posts.map((p)=>{
          return <Post key={p.id} post={p} user={Users.filter((u)=> u.id === p.userId)[0]}/>
        })}
    </div>
  )
}
