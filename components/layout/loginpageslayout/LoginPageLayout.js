import React from "react";
import LoginPageFooter from "../Footer/LoginPageFooter";
import LoginPageHeader from "../Header/LoginPageHeader/LoginPageHeader";
const LoginPageLayout = ({ children }) => {
  return (
    <>
      <LoginPageHeader />
      <main>
        {children}
      </main>
      <LoginPageFooter />
    </>
  );
};

export default LoginPageLayout;
