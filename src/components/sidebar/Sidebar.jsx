import classes from "./Sidebar.module.css";
import { RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <ul className={classes.sidebarList}>
          <li className={classes.sidebarListItem}>
            <RssFeed className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Feed </span>
          </li>
          <li className={classes.sidebarListItem}>
            <Chat className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Chats </span>
          </li>
          <li className={classes.sidebarListItem}>
            <PlayCircle className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Videos </span>
          </li>
          <li className={classes.sidebarListItem}>
            <Group className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Groups </span>
          </li>
          <li className={classes.sidebarListItem}>
            <Bookmark className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Bookmarks </span>
          </li>
          <li className={classes.sidebarListItem}>
            <HelpOutline className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Questions </span>
          </li>
          <li className={classes.sidebarListItem}>
            <WorkOutline className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Jobs </span>
          </li>
          <li className={classes.sidebarListItem}>
            <Event className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Events </span>
          </li>
          <li className={classes.sidebarListItem}>
            <School className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}> Courses </span>
          </li>
        </ul>
        <button className={classes.button}>Show More</button>
        <hr className={classes.separator}/>
        <ul className={classes.friendList}>
            <li className={classes.friend}>
                <img src="/assets/persons/v3_0287800.png" alt="Jhon Doe" className={classes.profilePictureImg} />
                <span className={classes.friendName}>Jhon Doe</span>
            </li>
            <li className={classes.friend}>
                <img src="/assets/persons/v3_0287800.png" alt="Jhon Doe" className={classes.profilePictureImg} />
                <span className={classes.friendName}>Jhon Doe</span>
            </li>
            <li className={classes.friend}>
                <img src="/assets/persons/v3_0287800.png" alt="Jhon Doe" className={classes.profilePictureImg} />
                <span className={classes.friendName}>Jhon Doe</span>
            </li>
            <li className={classes.friend}>
                <img src="/assets/persons/v3_0287800.png" alt="Jhon Doe" className={classes.profilePictureImg} />
                <span className={classes.friendName}>Jhon Doe</span>
            </li>
            <li className={classes.friend}>
                <img src="/assets/persons/v3_0287800.png" alt="Jhon Doe" className={classes.profilePictureImg} />
                <span className={classes.friendName}>Jhon Doe</span>
            </li>
            <li className={classes.friend}>
                <img src="/assets/persons/v3_0287800.png" alt="Jhon Doe" className={classes.profilePictureImg} />
                <span className={classes.friendName}>Jhon Doe</span>
            </li>
            <li className={classes.friend}>
                <img src="/assets/persons/v3_0287800.png" alt="Jhon Doe" className={classes.profilePictureImg} />
                <span className={classes.friendName}>Jhon Doe</span>
            </li>
            <li className={classes.friend}>
                <img src="/assets/persons/v3_0287800.png" alt="Jhon Doe" className={classes.profilePictureImg} />
                <span className={classes.friendName}>Jhon Doe</span>
            </li>
        </ul>

      </div>
    </div>
  );
}
