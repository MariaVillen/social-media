import { useEffect, useState } from "react";
import Avatar from "../avatar/avatar.component";
import classes from "./UserPannel.module.scss";
import { useOutletContext } from "react-router-dom";

function UserPannel() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, users] = useOutletContext();

  return (
    <div>
      <h2>List of users</h2>
      <ul className={classes.friendList}>
        {users.length > 0 ? (
          users.map((u) => {
            return (
              <li className={classes.activeCard}>
                <div className={classes.activeCard_header}>
                  <div className={classes.activeCard_user}>
                    <Avatar
                      key={u.id}
                      username={u.name}
                      userImage={u.profilePicture}
                      userId={u.id}
                    />
                    <div className={classes.activeCard_user_name}>
                      <span>{u.name}</span>
                      <span>{u.lastName}</span>
                    </div>
                  </div>
                </div>
                <div className={classes.activeCard_body}>
                  <div className={classes.activeCard_data}>
                    <div className={classes.activeCard_data_email}>
                      <span>Email:</span>
                      {u.email}
                    </div>
                    <div className={classes.activeCard_data_register}>
                      <span>Inscription:</span>
                      {u.createdAt}
                    </div>
                  </div>
                  <div className={classes.activeCard_action}>
                    <input
                      className={u.isActive ? classes.activeCard_action_check_active : classes.activeCard_action_check_inactive}
                      id={`userActive${u.id}`}
                      type="button"
                      value={u.isActive ? "Desactiver" : "Activer"}
                    />
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <p> Not users founded </p>
        )}
      </ul>
    </div>
  );
}
export default UserPannel;
