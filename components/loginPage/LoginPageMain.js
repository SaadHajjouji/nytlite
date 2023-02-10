import { useEffect, useRef, useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import classes from "./LoginPageMain.module.scss";
const LoginPageMain = () => {
  const inputref = useRef();
  const [logged, setlogged] = useState(false);
  const storeEmail = (e) => {
    e.preventDefault();
    localStorage.setItem("email", inputref.current.value);
    setlogged(true);
  };
  useEffect(() => {
    if (localStorage.getItem("email") === null) {
      setlogged(false);
    } else {
      setlogged(true);
    }
  }, []);
  const logout = () => {
    if (window !== "undefined") {
      window.localStorage.clear();
    }
    setlogged(false);
  };
  if (!logged) {
    return (
      <>
        <h2 className={classes.pageHeading}>Log in or create an account</h2>
        <section className={classes.sectionWrapper}>
          <form onSubmit={storeEmail} className={classes.loginForm}>
            <div className={classes.FormInput}>
              <label htmlFor="email">Email Address</label>
              <input
                ref={inputref}
                type="email"
                name="email"
                defaultValue="KindVisitor@gmail.com"
                readOnly
              />
            </div>
            <button>Continue</button>
          </form>
          <div className={classes.orSection}>
            <div className={classes.orLine}></div>
            <span>or</span>
            <div className={classes.orLine}></div>
          </div>
          <div className={classes.conditions}>
            By continuing, you agree to the updated <u>Terms of Sale</u>,
            <u>Terms of Service</u>, and <u>Privacy Policy</u>.
          </div>
          <div className={classes.loginOptionsSection}>
            <button onClick={storeEmail}>
              <FaGoogle />
              <span> Continue with Google</span>
            </button>
            <button onClick={storeEmail}>
              <FaFacebook />
              <span>Continue with Facebook</span>
            </button>
            <button onClick={storeEmail}>
              <FaApple /> <span>Continue with apple</span>
            </button>
          </div>
        </section>
      </>
    );
  }
  if (logged)
    return (
      <div className={classes.loggedindash}>
        <h1>This is clearly a fake login</h1>
        <button className={classes.logoutbtn} onClick={logout}>
          logout
        </button>
      </div>
    );
};

export default LoginPageMain;
