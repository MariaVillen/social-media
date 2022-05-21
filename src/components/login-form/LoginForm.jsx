import classes from "./LoginForm.module.scss";
import { useRef, useState, useEffect } from "react";
import {Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useApiData } from "../../api/api";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const LoginForm = () => {

 const {sendLoginRequest} = useApiData();

  // Authorization
  const{ setAuth } = useAuth(); 

  // Navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Get where user came from

  // Referencies
  const emailRef = useRef();
  const errRef = useRef();

  // Error States
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // focus on user input
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Reset error messages to '' if user or password changes
  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  // Pass visibility
  const [seePass, setSeePass] = useState(false);

  // Submition
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await sendLoginRequest({email: email, password:pwd});
      console.log('Login Response: ', response.data);
      if (!response) {
        console.log('No answer');
        return;
      }
      if (!response?.data?.accessToken) {
        console.log('Not acces token sent');
        return;
      }
      if (!response?.data?.userRole) {
        console.log('No roles sent');
        return;
      }
      const accessToken = response?.data?.accessToken;
      const userId = response?.data?.userId
      const roles = response?.data?.userRole;

      setAuth({user: {id: userId, roles: roles}, accessToken});
      setEmail("");
      setPwd("");
      navigate(from, {repalce:true}); // redirect to last location

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
          <label htmlFor="password">Mot de passe </label>
          <span>
            <input
              type={seePass ? "text" : "password"}
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            {seePass ?  <Visibility className = {classes.passIcon} onClick={()=> setSeePass(false)}/> :
            <VisibilityOff className={classes.passIcon} onClick={()=> setSeePass(true)}/>}
          </span>
        </div>
        <Link className={classes.auth_forgotpass} to="/forgottenPass">
          Mot de passe oublié ?
        </Link>

        <div className={classes.auth_actions}>
          <button type="submit" className={classes.auth_actions_link}>
            Connexion
          </button>

          <Link className={classes.auth_actions_toggle} to="/register">
            Créer un nouveau compte
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
