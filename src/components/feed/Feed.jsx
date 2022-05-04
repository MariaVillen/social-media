import classes from './Feed.module.css';
import Share from '../share/Share';

export default function Feed() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Share/>
      </div>
    </div>
  )
}
