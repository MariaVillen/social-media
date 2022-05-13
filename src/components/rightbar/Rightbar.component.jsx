import classes from './Rightbar.module.scss';
import Feed from '../feed/Feed.component';


export default function Rightbar({className}) {
  return (
    <div className={`${classes.container} ${className}`}>
      <p className={classes.title}> Top Comments Posts!</p>
      <Feed/>
    </div>
  )
}
