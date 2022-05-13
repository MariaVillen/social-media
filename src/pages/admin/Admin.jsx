import classes from './Admin.module.scss';
import PostComment from '../../components/post-comment/PostComment.component';


export default function Admin() {
  return (
    <div>
      <h1> Admin Page </h1>
       <PostComment placeHolder="Je veux commenter!"/>
       
       <h2>Gerer les utilisateurs</h2>
       <h3>Utilisateurs non actifs</h3>
       <h3>Utilisateurs actifs</h3>
       <h3>Utilisateurs effacées</h3>
       <h2>Gerer les signalements</h2>
       
    </div>
  )
}
