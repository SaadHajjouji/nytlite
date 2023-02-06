import React from "react";
import classes from "./LoginPageMain.module.scss";
const LoginPageMain = () => {
  return (
    <>
      <h2 className={classes.pageHeading}>Log in or create an account</h2>
      <form className={classes.loginForm}>
        <label for="email">Email Address</label>
        <input type="email" name="email" />
        <button>Continue</button>
      </form>
    </>
  );
};

export default LoginPageMain;
