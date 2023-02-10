import React from "react";
import Image from "next/image";
import classes from "./LoginPageHeader.module.scss";
import Link from "next/link";
const LoginPageHeader = () => {
  return (
    <header>
      <div className={classes.pageHead}>
        <Link href={"/"}>
          <Image
            className={classes.logo}
            src={"/images/NewYorkTimes.svg"}
            alt="newyorktimes logo"
            width={200}
            height={28.57}
          />
        </Link>
      </div>
    </header>
  );
};

export default LoginPageHeader;
