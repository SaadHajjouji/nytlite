import { useState } from "react";
import SubscribePlanCard from "../ui/SubscribePlanCard";
import SubscribePlanCardPhone from "../ui/SubscribePlanCardPhone";
import classes from "./SubscribePageMain.module.scss";
const SubscribePageMain = () => {
  const [plan, setPlan] = useState("News");

  return (
    <>
      <div className={classes.PlansWrapperDesktop}>
        <SubscribePlanCard allAccess={true} />
        <SubscribePlanCard allAccess={false} />
      </div>
      <div className={classes.PlansWrapperPhone}>
        <div className={classes.switchSection}>
          <div
            onClick={() => setPlan("News")}
            className={
              plan === "News"
                ? `${classes.borderBottom}  ${classes.switchNews}`
                : classes.switchNews
            }
          >
            News
          </div>
          <div
            onClick={() => setPlan("AllAccess")}
            className={
              plan === "AllAccess"
                ? `${classes.borderBottom}  ${classes.switchAllAccess}`
                : classes.switchAllAccess
            }
          >
            <span>BEST VALUE</span>
            <span>All Access</span>
          </div>
        </div>
        {plan === "News" ? (
          <SubscribePlanCardPhone allAccess={false} />
        ) : (
          <SubscribePlanCardPhone allAccess={true} />
        )}
      </div>
    </>
  );
};

export default SubscribePageMain;
