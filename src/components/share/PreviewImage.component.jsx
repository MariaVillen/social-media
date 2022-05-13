import classes from "./PreviewImage.module.scss";
import { Close } from "@mui/icons-material";

export default function PreviewImage(props) {

  return (
    <div className={classes.preview}>
      <div className={classes.preview_container}>
        <img
          src={props.image}
          alt="imageLoaded"
          className={classes.preview_image}
        />
        <Close
          onClick={props.onClose}
          className={classes.preview_btn_close}
        />
      </div>
    </div>
  );
}
