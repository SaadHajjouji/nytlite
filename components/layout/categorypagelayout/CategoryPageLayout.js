import CategoryPageHeader from "../Header/CategoryPageHeader/CategoryPageHeader";
import DesktopFooter from "../Footer/DesktopFooter";
import MobileFooter from "../Footer/MobileFooter";
import classes from "../../../styles/pageInlinePadding.module.scss";
const CategoryPageLayout = ({
  children,
  showSideNavDesktop,
  setshowSideNavDesktop,
  category,
  sections,
  setLoading,
}) => {
  return (
    <div className={classes.PageInlinePadding}>
      <CategoryPageHeader
        showSideNavDesktop={showSideNavDesktop}
        setshowSideNavDesktop={setshowSideNavDesktop}
        category={category}
        sections={sections}
        setLoading={setLoading}
      />
      <main>{children}</main>
      <DesktopFooter sections={sections} setLoading={setLoading} />
      <MobileFooter sections={sections} setLoading={setLoading} />
    </div>
  );
};

export default CategoryPageLayout;
