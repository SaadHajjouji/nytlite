import DesktopFooter from "../Footer/DesktopFooter";
import MobileFooter from "../Footer/MobileFooter";
import MainPageHeader from "../Header/MainPageHeader/MainPageHeader";
import classes from "../../../styles/pageInlinePadding.module.scss";
const MainPageLayout = ({
  children,
  showSideNavDesktop,
  setshowSideNavDesktop,
  showMenuBtn,
  setShowMenuBtn,
  sections,
  setLoading,
}) => {
  return (
    <div className={classes.PageInlinePadding}>
      <MainPageHeader
        showSideNavDesktop={showSideNavDesktop}
        setshowSideNavDesktop={setshowSideNavDesktop}
        showMenuBtn={showMenuBtn}
        setShowMenuBtn={setShowMenuBtn}
        sections={sections}
        setLoading={setLoading}
      />
      <main>{children}</main>
      <DesktopFooter sections={sections} setLoading={setLoading} />
      <MobileFooter sections={sections} setLoading={setLoading} />
    </div>
  );
};

export default MainPageLayout;
