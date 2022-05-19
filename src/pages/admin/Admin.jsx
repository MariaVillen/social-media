
import classes from './Admin.module.scss';
import PostComment from '../../components/post-comment/PostComment.component';
import { getRoles } from "../../helpers/auth-helpers";
import { Outlet, Link } from "react-router-dom";

export default function Admin({allowedRoles}) {
return (
     <>
      {/* { getRoles()?.find(role => allowedRoles?.includes(role)) ? */}
    <div>
      <h1> Panneau d'administration</h1>
      <ul>
        <li>
        <Link className={classes.topbar_link} to="/admin/users">
                Users 
        </Link>
        </li>
        <li>
        <Link className={classes.topbar_link} to="/admin/reports">
                Reports
        </Link>
       </li>
      </ul>
      <Outlet/>
    </div>
     {/* :<></>} */}
    </>
  )
}
