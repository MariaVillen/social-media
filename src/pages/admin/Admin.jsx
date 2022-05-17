
import classes from './Admin.module.scss';
import PostComment from '../../components/post-comment/PostComment.component';
import { getRoles } from "../../helpers/auth-helpers";

export default function Admin({allowedRoles}) {
return (
    <>{
      getRoles()?.find(role => allowedRoles?.includes(role)) ?
    <div>
      <h1> Admin Page </h1>
       <PostComment placeHolder="Je veux commenter!"/>

       <h2>Gerer les utilisateurs</h2>
       <h3>Utilisateurs non actifs</h3>
       <h3>Utilisateurs actifs</h3>
       <h3>Utilisateurs effacées</h3>
       <h2>Gerer les signalements</h2>

    </div>
    :
    <></>
    }
    </>
  )
}
