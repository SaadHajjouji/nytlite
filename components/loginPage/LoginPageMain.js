import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import classes from "./LoginPageMain.module.scss";
const LoginPageMain = () => {
  return (
    <>
      <h2 className={classes.pageHeading}>Log in or create an account</h2>
      <section className={classes.sectionWrapper}>
        <form className={classes.loginForm}>
          <div className={classes.FormInput}>
            <label for="email">Email Address</label>
            <input type="email" name="email" />
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
          <button>
            <FaGoogle />
            <span> Continue with Google</span>
          </button>
          <button>
            <FaFacebook />
            <span>Continue with Facebook</span>
          </button>
          <button>
            <FaApple /> <span>Continue with apple</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default LoginPageMain;
