import classes from "./Sidebar.module.scss";
import { RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material";
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
import ProfileCard from '../profile-card/ProfileCard';

export default function Sidebar({className}) {
  return (
    <div className={`${classes.container} ${className}`}>
      <ProfileCard/>
      <div className={classes.wrapper}>
        <ul className={classes.sidebarList}>
        <li className={classes.sidebarListItem}>
            <RssFeed className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Changer biographie </span>
          </li>
          <li className={classes.sidebarListItem}>
            <RssFeed className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Changer photo profile </span>
          </li>
          <li className={classes.sidebarListItem}>
            <Chat className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Changer photo header </span>
          </li>
          <li className={classes.sidebarListItem}>
            <PlayCircle className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Changer Mot de Pas </span>
          </li>
          <li className={classes.sidebarListItem}>
            <Group className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Demander suppresion compte </span>
          </li>
        </ul>
        <hr className={classes.separator}/>
        <h1>Mes amis</h1>
        <ul className={classes.friendList}>

          { Users.map(
            (user) => { return <CloseFriend key={user.id} user = {user} />}
          ) }            

        </ul>

      </div>
    </div>
  );
}
