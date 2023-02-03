import React from "react";
import classes from "./Spinner.module.scss";
const Spinner = () => {
  return (
    <div className={classes.center}>
    <div className={classes.lds_ripple}>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Spinner;
