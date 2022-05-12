import { PermMedia, ReadMoreRounded } from "@mui/icons-material";
import { useState } from "react";
import classes from "./Share.module.scss";

export default function Share() {
  const [urlImageLoaded, setUrlImageLoaded] = useState(false);
  const [file, setFile] = useState();

  function handleKeyDown(e) {
    if (e.target.value.length === 0) {
      e.target.style.height = "inherit";
    } else {
      e.target.style.height = "inherit";
      const newHeight = e.target.scrollHeight + 16;
      e.target.style.height = `${newHeight}px`;
    }
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const loadImage = event.target.loadImage.value;
    const textComment = event.target.textComment.value;
    console.log(loadImage, textComment);

    //const password = event.target.password.value;
  };

  const loadImagePreview = (e) => {
    const urlFile = e.target.value;
    console.log(urlFile);
    console.log(e.target.files);
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setUrlImageLoaded(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      console.log("Not Loaded");
      setUrlImageLoaded(false);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <div className={classes.wrapper}>
            <div className={classes.shareHeader}>
              <img
                src="/assets/persons/8.jpeg"
                alt="name"
                className={classes.profileImg}
              />
              <div className={classes.contentEdit}>
                <textarea
                  name="textComment"
                  rows="1"
                  onKeyDown={handleKeyDown}
                  placeholder="À quoi penses-tu?"
                  className={classes.edit}
                  autoFocus
                />
              </div>
            </div>
            {urlImageLoaded ? (
              <div className={classes.preview}>
                <div className={classes.loadedImage}>
                  <img src={urlImageLoaded} alt="imageLoaded" />
                  <button className={classes.close}>X</button>
                </div>
              </div>
            ) : null}
            <hr className={classes.separator} />
            <div className={classes.shareFooter}>
              <div className={classes.shareOptions}>
                <input
                  onChange={loadImagePreview}
                  accept="image/*"
                  id="loadImage"
                  type="file"
                  style={{ display: "none" }}
                />
                <label className={classes.shareOption} htmlFor="loadImage">
                  <PermMedia htmlColor="tomato" className={classes.shareIcon} />
                  <span className={classes.shareOptionText}>Ajouter Image</span>
                </label>
                <button className={classes.shareBtn}>Publier</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
