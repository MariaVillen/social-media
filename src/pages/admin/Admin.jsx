import classes from "./Admin.module.scss";

export default function Admin() {
  return (
    <div className={classes.container}>
      <h1> Admin Page </h1>
      <h2>Gerer les utilisateurs</h2>
      <h3>Utilisateurs non actifs</h3>
      <h3>Utilisateurs actifs</h3>
      <h3>Utilisateurs effacées</h3>
      <h2>Gerer les signalements</h2>
    </div>
  );
}
