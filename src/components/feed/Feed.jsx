import classes from './Feed.module.scss';
import Share from '../share/Share';
import Post from '../post/Post';
export default function Feed() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
