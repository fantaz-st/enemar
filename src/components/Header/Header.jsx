import classes from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderDesktopNav from "./HeaderDesktopNav";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderScrollController from "./HeaderScrollController";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const Header = ({ menuItems = [], locale = "hr", siteName = "EnEMar", logo = false }) => {
  return (
    <HeaderScrollController>
      <header className={classes.header} data-header-root>
        <div className={classes.inner}>
          <HeaderLogo locale={locale} siteName={siteName} logo={logo} />

          <HeaderDesktopNav menuItems={menuItems} />

          <div className={classes.actions}>
            <div className={classes.switchWrap}>
              <LanguageSwitch locale={locale} size="small" />
            </div>

            <HeaderMobileMenu menuItems={menuItems} locale={locale} siteName={siteName} logo={logo} />
          </div>
        </div>
      </header>
    </HeaderScrollController>
  );
};

export default Header;
