import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import classes from "./Share.module.css";

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
          <input
            placeholder="What is in your mind?"
            className={classes.shareInput}
          />
        </div>
        <hr className={classes.separator} />
        <div clasName={classes.shareFooter}>
          <div className={classes.shareOptions}>
            <div className={classes.shareOption}>
              <PermMedia htmlColor="tomato" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo or Video</span>
            </div>
            <div className={classes.shareOption}>
              <Label htmlColor="blue" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Tagº</span>
            </div>
            <div className={classes.shareOption}>
              <Room htmlColor="green" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Location</span>
            </div>
            <div className={classes.shareOption}>
              <EmojiEmotions htmlColor="goldenrod" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Feelings</span>
            </div>
            <button className={classes.shareBtn}>Share</button>

          </div>
        </div>
      </div>
    </div>
  );
}
