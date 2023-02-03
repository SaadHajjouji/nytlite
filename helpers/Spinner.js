import React from "react";
import classes from "./Spinner.module.scss";
import Image from "next/image";
const Spinner = () => {
  return (
    <div className={classes.center}>
      <div className={classes.lds_ripple}>
        <div></div>
        <div></div>
      </div>
      <Image
        src={"/images/NewYorkTimes.svg"}
        alt="newyorktimes logo"
        width={400}
        height={57.14}
      />
    </div>
  );
};

export default Spinner;
