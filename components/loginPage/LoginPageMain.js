import React from "react";
import classes from "./LoginPageMain.module.scss";
const LoginPageMain = () => {
  return (
    <>
      <h2 className={classes.pageHeading}>Log in or create an account</h2>
      <form className={classes.loginForm}>
        <div className={classes.FormInput}>
          <label for="email">Email Address</label>
          <input type="email" name="email" />
        </div>
        <button>Continue</button>
      </form>
    </>
  );
};

export default LoginPageMain;
