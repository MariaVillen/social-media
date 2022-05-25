import classes from "./LoginForm.module.scss"; // styles
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth"; // Get auth information
import api from "../../api/axios"; // db request


const LoginForm = () => {
  // Instance of hook for DB requests

  // Getting Authorization Data from AuthContext.
  const { setAuth, persist, setPersist } = useAuth();

  // Navigate handler
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

  // Focus on email input at first render
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Reset error messages to '' if user or password changes to clear error messages.
  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  // Password visibility handler
  const [seePass, setSeePass] = useState(false);

  // Form Submition
  const submitHandler = async (e) => {
    e.preventDefault()
    // Requesting login to DB
    try {
      const response = await api.post("/auth/login", JSON.stringify({ email: email, password: pwd }), {
        headers: {'Content-Type':'application/json'},
        withCredentials: true
      });

      if (!response) {
        console.log("No answer");
        return;
      } else if (!response?.data?.accessToken) {
        console.log("Not acces token sent");
        return;
      } else if (!response?.data?.userRole) {
        console.log("No roles sent");
        return;
      } else if (!response?.data?.userId) {
        console.log("No user id sent");
      }
      console.log(response);
      // Setting auth value for authcontext<
      const accessToken = response?.data?.accessToken;
      const userId = response?.data?.userId;
      const roles = response?.data?.userRole;
      setAuth({ user: { id: userId, roles: roles }, accessToken });

      // Cleaning form
      setEmail("");
      setPwd("");
      emailRef.current.focus();

      // Redirecting to last location
      navigate(from, { repalce: true }); // redirect to last location
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Pas de réponse du serveur.");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Nom d'utilisateur ou mot de passe incorrecte");
      } else if (err.response?.status === 403) {
        setErrMsg(
          "L'utilisateur n'es pas activé. Veuillez contacter avec administration."
        );
      } else if (err.response?.status === 429) {
        setErrMsg("Trop de tentatives, réessayez plus tard");
      } else {
        setErrMsg("La connexion a échoué");
      }
      errRef.current.focus();
    }
  };

  const togglePersist = () => {
    setPersist(prev=> !prev );
  }

  useEffect(()=> {
    localStorage.setItem("persist", persist);
  }, [persist]);


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
            {seePass ? (
              <Visibility
                className={classes.passIcon}
                onClick={() => setSeePass(false)}
              />
            ) : (
              <VisibilityOff
                className={classes.passIcon}
                onClick={() => setSeePass(true)}
              />
            )}
          </span>
        </div>
        <Link className={classes.auth_forgotpass} to="/forgottenPass">
          Mot de passe oublié ?
        </Link>

        <div className={classes.auth_actions}>
          <button type="submit" className={classes.auth_actions_link}>
            Connexion
          </button>
          <div className={classes.auth_actions_persist}>
            <input 
              type="checkbox"
              id="persist"
              onChange = {togglePersist}
              checked = {persist} 
            />
            <label htmlFor="persist">Trust this Device</label>
          </div>
          <hr/>

          <Link className={classes.auth_actions_toggle} to="/register">
            Créer un nouveau compte
          </Link>
         
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
