import classes from './Rightbar.module.scss';
import Feed from '../feed/Feed.component';


// Rightbar of home 

export default function Rightbar({className}) {
  return (
    <div className={`${classes.container} ${className}`}>
      <h2 className={classes.title}> Top Comments Posts!</h2>
      <Feed topComments={true}/>
    </div>
  )
}
