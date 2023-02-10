import React from "react";
import classes from "./SubsLoginBtns.module.scss";
import Link from "next/link";
const SubsLoginBtns = () => {
  return (
    <div className={classes.subsLogin}>
      <Link href={"/subscribe"}>SUBSCRIBE FOR $0.25/ WEEK</Link>
      <Link href={"/login"}>LOG IN</Link>
    </div>
  );
};

export default SubsLoginBtns;
