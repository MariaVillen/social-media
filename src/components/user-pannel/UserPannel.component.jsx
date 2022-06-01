
import classes from "./UserPannel.module.scss";
import { useOutletContext } from "react-router-dom";
import UserCard from "../userCard/UserCard.component";

function UserPannel() {
  const [users] = useOutletContext();

  const userActivationHandler = (event) => {
    console.log(event.target.value);
      // const idUser = user.id;
      // const putRoute = "/user/" + idUser;
      // try {
      //   const response = await axios.put(putRoute, { isActive: content });
      //   if (!response) {
      //     console.log("No answer");
      //     return;
      //   }
      //   console.log("Modifié!");
      //   setUser({...user, bio: content});
      //   setOnEdit(false);
      // } catch (err) {
      //   console.log(err);
      // }
    };

  return (
    <div>
      <h2>List of users</h2>
      <ul className={classes.friendList}>
        {users.length > 0 ? (
          users.map((u) => {
            return (
              <li key={u.id} className={classes.activeCard}>
                <UserCard userInCard = {u}/>
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
