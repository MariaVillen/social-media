import { PermMedia } from "@mui/icons-material";
import classes from "./Share.module.scss";

export default function Share() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.shareHeader}>
          <img
            src="/assets/persons/v3_0014506.png"
            alt="name"
            className={classes.profileImg}
          />
          <span className={classes.shareInput}> Qu'est que tu pense? </span>
        </div>
        <hr className={classes.separator} />
        <div clasName={classes.shareFooter}>
          <div className={classes.shareOptions}>
            <div className={classes.shareOption}>
              <PermMedia htmlColor="tomato" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Ajouter Image</span>
            </div>
            <button className={classes.shareBtn}>Publier</button>

          </div>
        </div>
      </div>
    </div>
  );
}
