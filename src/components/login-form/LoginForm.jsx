import classes from "./LoginForm.module.scss";
import { useRef, useState, useEffect, useContext } from "react";
import {login} from "../../api/api";

import AuthContext from "../../context/AuthProvider";
import { setToken, setRoles } from "../../helpers/auth-helpers";

const LoginForm = (props) => {

  const{ setAuth } = useContext(AuthContext); 
  // Referencies
  const emailRef = useRef();
  const errRef = useRef();

  // Error States
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // focus on user input
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Reset error messages to '' si cambia el user o password
  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const loginViewHandler = () => {
    props.onChangeFormView(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await login({email: email, password:pwd});
      if (!response) {
        console.log('sin respuesta');
        return;
      }
      if (!response?.data?.accessToken) {
        console.log('sin access token');
        return;
      }
      if (!response?.data?.userRole) {
        console.log('sin roles');
        return;
      }
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.userRole;
      setAuth({email, pwd, roles, accessToken});
      setEmail("");
      setPwd("");
      setSuccess(true);

    } catch(err){
      if (!err?.response) {
        setErrMsg('Pas de réponse du serveur.');
      } else if (err.response?.status === 401) {
        setErrMsg("Nom d'utilisateur ou mot de passe incorrecte")
      } else if(err.response?.status === 403) {
        setErrMsg("L'utilisateur n'es pas activé. Veuillez contacter avec administration.");
      } else if (err.response?.status === 429) {
        setErrMsg('Trop de tentatives, réessayez plus tard')
      } else {
        setErrMsg('La connexion a échoué');
      }
      errRef.current.focus();
    }


    

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
    /*const token = "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";
    const roles = [5051, 4010];
    setToken(token);
    setRoles(roles);
    props.onLogin(true);*/
  };

  return (
    <section className={classes.auth}>
      <p
        ref={errRef}
        className={errMsg ? classes.errMsg : classes.offscreen}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Connexion</h1>

      <form onSubmit={submitHandler}>
        <div className={classes.auth_control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className={classes.auth_control}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </div>

        <a href="#" className={classes.auth_forgotpass}>
          Mot de passe oublié ?
        </a>

        <div className={classes.auth_actions}>
          <button type="submit" className={classes.auth_actions_link}>
            Connexion
          </button>

          <p className={classes.auth_actions_toggle} onClick={loginViewHandler}>
            Créer un nouveau compte
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
