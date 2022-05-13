import { PermMedia } from "@mui/icons-material";
import { useState, useEffect } from "react";
import classes from "./Share.module.scss";
import PreviewImage from "./PreviewImage.component";
import TextareaRezise from "../textarea-rezise/TextareaResize.component";

export default function Share(props) {

  // Load Image if was on parameters props

  useEffect(()=>{
    if (props.photo) {
      setUrlImageLoaded(props.photo);
      console.log('render');
    }
   },[props.photo]);
  


  // Use State for Files
  const [urlImageLoaded, setUrlImageLoaded] = useState(false); // if url exists will storage url file
  const [file, setFile] = useState(); //if file is charged it will storage the file to send
  const [isImageCharged, setIsImageCharged] = useState(""); //control input value image (for reset)

  /**
   * @EventHandler
   * @name loadImagePreview
   * @description Get the path and file from the input image and change useState.
   * @param {EventListenerObject} e
   */
  const loadImagePreviewHandler = (e) => {
    console.log('load image');
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setUrlImageLoaded(e.target.result);
        console.log('url: ', urlImageLoaded);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
      console.log('file: ', file);

    } else {
      console.log("Not Loaded");
      setUrlImageLoaded(false);
      console.log('imput value: ', isImageCharged);
    }
  };

  /**
   * @EventHandler
   * @Name imageDeleteHandler
   * @description Will reset input value if the image is delete.
   * @param {*} event 
   */
  const imageDeleteHandler = (event) => {
    setUrlImageLoaded(false);
    setFile(false);
    setIsImageCharged("");
    console.log('delete');
  };

  /**
   * @EventHandler
   * @name textAreaReziser
   * @description Change the size of the textarea.
   * @param {EventListenerObject} e
   */
  function textAreaReziserHandler(e) {
    if (e.target.value.length === 0) {
      e.target.style.height = "inherit";
    } else {
      e.target.style.height = "inherit";
      const newHeight = e.target.scrollHeight + 16;
      e.target.style.height = `${newHeight}px`;
    }
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }

  /**
   * @EventHandler
   * @name submitHandler
   * @param {*} event
   */
  const submitHandler = (event) => {
    event.preventDefault();
    //const file = event.target.loadImage.files[0];
    //const url = event.target.loadImage.value;
    //const content = event.target.textComment.value;
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
                className={classes.shareHeader_image}
              />

              <div className={classes.shareHeader_content}>
                <TextareaRezise
                  name="textComment"
                  onKeyDown={textAreaReziserHandler}
                  placeHolder="À quoi penses-tu?"
                  className={classes.shareHeader_content_edit}
                  defaultValue={props.content}
                />
              </div>
            </div>

            {urlImageLoaded ? (
              <PreviewImage image={urlImageLoaded} onClose={imageDeleteHandler}/>
            ) : null}

            <hr className={classes.separator} />

            <div className={classes.shareFooter}>
              <div className={classes.shareFooter_options}>
                <input
                  onChange={loadImagePreviewHandler}
                  accept="image/*"
                  id="loadImage"
                  name="loadImage"
                  type="file"
                  style={{ display: "none" }}
                  value={isImageCharged}
                />
                <label
                  className={classes.shareFooter_option}
                  htmlFor="loadImage"
                >
                  <PermMedia
                    htmlColor="tomato"
                    className={classes.shareFooter_option_icon}
                  />
                  <span className={classes.shareFooter_option_text}>
                    Ajouter Image
                  </span>
                </label>
                <button className={classes.share_btn}>Publier</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
