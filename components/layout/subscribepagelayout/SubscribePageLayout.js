import React from "react";
import classes from "../../../styles/pageInlinePadding.module.scss";
import SubscribePageFooter from "../Footer/SubscribePageFooter";
import SubscribePageHeader from "../Header/SubscribePageHeader/SubscribePageHeader";
import styles from "./SubscribePageLayout.module.scss";
const SubscribePageLayout = ({ children }) => {
  return (
    <div className={`${classes.PageInlinePadding} ${styles.entirePage}`}>
      <SubscribePageHeader />
      <main>{children}</main>
      <SubscribePageFooter />
    </div>
  );
};

export default SubscribePageLayout;
