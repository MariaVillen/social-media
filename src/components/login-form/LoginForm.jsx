import classes from "./LoginForm.module.scss";

const LoginForm = (props) => {
  const loginViewHandler = () => {
    props.onChangeFormView(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(true);
    //const email = event.target.email.value;
    //const password = event.target.password.value;
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>

      <form onSubmit={submitHandler}>
        <div className={classes.auth_control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>

        <div className={classes.auth_control}>
          <label htmlFor="password">Mot de pas</label>
          <input type="password" id="password" required />
        </div>

        <button className={classes.auth_forgotpass}>
          Mot de passe oublié ?
        </button>

        <hr />

        <div className={classes.auth_actions}>
          <button className={classes.auth_actions_link} onClick={submitHandler}>Login</button>

          <button
            type="button"
            className={classes.auth_actions_toggle}
            onClick={loginViewHandler}
          >
            Create new account
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
