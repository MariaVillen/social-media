import Avatar from "../avatar/avatar.component";
import classes from "./AdminReportCard.module.scss";
import {Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function AdminReportCard({report, className}) {

  const urlid = report.postId ? `/post/${report.postId}` : `/post/${report.comment.postId}`;
  const axios = useAxiosPrivate();

  const stateHandler = async (e)=>{
    const option = e.target.value;
    const options = ["Non lu", "En cours", "Accepté", "Rejeté", "Archivé"];
    if (options.includes(option)){
      
      const result = await axios.put(`/report/${report.id}`, {
        state: option});
    }

  }


  return (
    <div className={`${classes.reportAdminCard} ${className}`}>
      <div className={classes.reportAdminCard_header}>
        <Avatar 
          userImage={report.user.profilePicture} 
          userId = {report.userId} 
          userName = {report.user.name}
        />
        <div className={classes.reportAdminCard_body_title}>Signalement</div>
        <div>Date de Signalement: {report.createdAt} </div>
      </div>
      <div className={classes.reportAdminCard_main}>
        <div className={classes.reportAdminCard_body}>
          <div className={classes.reportAdminCard_body_report}>
            {report.reason}
          </div>
        </div>
        <div className={classes.reportAdminCard_footer}>

          <Link to={urlid} replace>Aller au message signalé </Link>
          <form>
            <label>Etat: </label>
            <select onChange={stateHandler} value={report.state}> 
              <option>Non lu</option>
              <option>En cours</option>
              <option>Accepté</option>
              <option>Rejeté</option>
              <option>Archivé</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminReportCard;
