import classes from "./Share.module.scss";
import { useState, useEffect } from "react";
import { PermMedia, Close } from "@mui/icons-material";
import PreviewImage from "./PreviewImage.component";
import TextareaRezise from "../textarea-rezise/TextareaResize.component";
import  useApiData  from "../../api/api";

// Component to share and public text and one image.

export default function Share(props) {

  const {createPost} = useApiData("private");

  const idInput = props.id || "createPost";

  useEffect(() => {
    if (props.photo) {
      setUrlImageLoaded(props.photo);
      console.log("render");
    }
  }, [props.photo]);

  // Use State for Files
  const [urlImageLoaded, setUrlImageLoaded] = useState(false); // if url exists will storage url file
  const [file, setFile] = useState(); //if file is charged it will storage the file to send
  const [isImageCharged, setIsImageCharged] = useState(""); //control input value image (for reset)

  // Event Handler for Preview Image
  const loadImagePreviewHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setUrlImageLoaded(e.target.result);
        console.log("url: ", urlImageLoaded);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
      console.log("file: ", file);
    } else {
      console.log("Not Loaded");
      setUrlImageLoaded(false);
      console.log("imput value: ", isImageCharged);
    }
  };

  // Event Handler for delete image preview and reset input
  const imageDeleteHandler = (event) => {
    setUrlImageLoaded(false);
    setFile(false);
    setIsImageCharged("");
    console.log("delete");
  };

  // Event Handler for submit form
  const submitHandler = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('image', file);
    formData.append('userId', props.userId);
    formData.append('content', event.target.textComment.value);

    try{
    const result = await createPost(formData);
    console.log(result);
    } catch(err) {
      console.log(err.message);
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className={classes.wrapper}>
          {props.content || props.photo ? (
            <div className={classes.share_btn_cancel}>
              <Close onClick={() => props.isOpen(false)} />
            </div>
          ) : null}

          <div className={classes.shareHeader}>
            <img
              src= {props.avatar}
              alt={ props.name}
              className={classes.shareHeader_image}
            />

            <div className={classes.shareHeader_content}>
              <TextareaRezise
                name="textComment"
                placeHolder="À quoi penses-tu?"
                className={classes.shareHeader_content_edit}
                textRezise={props.content}
              />
            </div>
          </div>

          {urlImageLoaded ? (
            <PreviewImage image={urlImageLoaded} onClose={imageDeleteHandler} />
          ) : null}

          <hr className={classes.separator} />

          <div className={classes.shareFooter}>
            <div className={classes.shareFooter_options}>
              <input
                onChange={loadImagePreviewHandler}
                accept="image/*"
                id={idInput}
                name="image"
                type="file"
                style={{ display: "none" }}
                value={isImageCharged}
              />

              <label className={classes.shareFooter_option} htmlFor={idInput}>
                <PermMedia
                  htmlColor="tomato"
                  className={classes.shareFooter_option_icon}
                />
                <span className={classes.shareFooter_option_text}>
                  Ajouter Image
                </span>
              </label>

              <button type="submit"className={classes.share_btn}>Publier</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
