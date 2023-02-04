import React from "react";
import Image from "next/image";
import classes from "./LoginPageHeader.module.scss"
const LoginPageHeader = () => {
  return (
    <header>
      <div>
        <Image
          src={"/images/NewYorkTimes.svg"}
          alt="newyorktimes logo"
          width={400}
          height={57.14}
        />
      </div>
    </header>
  );
};

export default LoginPageHeader;
