import React from "react";
import Image from "next/image";
import classes from "./SubscribePageHeader.module.scss";
import Link from "next/link";
const SubscribePageHeader = () => {
  return (
    <header className={classes.subscribePageHeader}>
      <Link href={"/"}>
        <Image
          src={"/images/NewYorkTimes.svg"}
          alt="newyorktimes logo"
          width={250}
          height={35.71}
          className={classes.logo}
        />
      </Link>

      <h1>Choose the subscribtion that&apos;s right for you.</h1>
      <span>Cancel or pause anytime.</span>
    </header>
  );
};

export default SubscribePageHeader;
