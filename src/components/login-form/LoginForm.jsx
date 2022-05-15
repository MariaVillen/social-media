import classes from "./LoginForm.module.scss";
import { setToken, setRoles } from "../../helpers/auth-helpers";

const LoginForm = (props) => {
  const loginViewHandler = () => {
    props.onChangeFormView(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //props.onLogin(true);
    //const email = event.target.email.value;
    //const password = event.target.password.value;


    /*
    login({email: email, password: password})
    .then((response) => {

      const token = response.data.token;
      const roles = response.data.roles

      setToken(token);
      setRoles(roles)   // Backend returns roles for that valid user and an access token, which are stored in localStorage in this example.

      props.onLogin(true);
  }).catch((err) => {

    if(err?response){
      alert('No Server Response')
    } else if (err.response?status === 401){
      alert('unhautorized')
    } else {
      alert('Login Failed')
    }
    props.onLogin(false);
  });
  */

  //Fake success validation:
    const token = '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';
    const roles = [5051, 4010];
    setToken(token);
    setRoles(roles);
    props.onLogin(true);

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