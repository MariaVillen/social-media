import classes from "./Share.module.scss";
import { useState, useEffect } from "react";
import { PermMedia, Close } from "@mui/icons-material";
import PreviewImage from "./PreviewImage.component";
import TextareaRezise from "../textarea-rezise/TextareaResize.component";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Avatar from "../avatar/avatar.component";

// Component to share and public text and one image.

export default function Share({
  userName,
  userImage,
  userId,
  photo,
  content,
  isOpen,
}) {
  const idInput = userId || "createPost";
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (photo) {
      setUrlImageLoaded(photo);
    }
  }, [photo]);

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
      };
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      setUrlImageLoaded(false);
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
    formData.append("image", file);
    formData.append("userId", userId);
    formData.append("content", event.target.textComment.value);

    try {
      await axiosPrivate.post("/post", formData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className={classes.wrapper}>
          <div className={classes.shareHeader}>
            <Avatar userImage={userImage} userName={userName} userId={userId} />

            <div className={classes.shareHeader_content}>
              <TextareaRezise
                name="textComment"
                placeHolder="À quoi penses-tu?"
                className={classes.shareHeader_content_edit}
                textRezise={content}
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
              <div className={classes.share_action}>
                {content || photo ? (
                    <div className={classes.share_btn_cancel}>
                      <span onClick={() => isOpen(false)}>Annuler</span>
                    </div>
                ) : null}
                <button type="submit" className={classes.share_btn}>
                  Publier
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
