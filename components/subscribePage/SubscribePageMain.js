import React from "react";
import SubscribePlanCard from "../ui/SubscribePlanCard";
import classes from "./SubscribePageMain.module.scss";
const SubscribePageMain = () => {
  return (
    <>
      <div className={classes.PlansWraper}>
        <SubscribePlanCard allAccess={true} />
        <SubscribePlanCard allAccess={false} />
      </div>
    </>
  );
};

export default SubscribePageMain;
