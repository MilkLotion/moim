import { useLocation } from "react-router-dom";

import QuickLinkGroup from "./components/quicklink/QuickLinkGroup";
import Club from "./components/club/Club";
// import Setting from "./components/setting/Setting";

import { sidebarMenu, clubSamples } from "./side.config";

import LogoIcon from "@icons/moim.svg?react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const { pathname } = useLocation();
  const isClubProfile = /^\/club\/@[^/]+$/.test(pathname);

  return (
    <aside className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>
        <LogoIcon />
        <h1 className="text-xl font-bold"> Moim </h1>
      </div>

      {/* Home menus */}
      <QuickLinkGroup sections={sidebarMenu.default} cur={pathname} />

      {/* Club Quick Access */}
      {isClubProfile && (
        <QuickLinkGroup sections={sidebarMenu.club} cur={pathname} />
      )}

      {/* My Clubs */}
      <Club sections={clubSamples.slice(0, 5)} cur={pathname} />

      {/* Setting */}
      <QuickLinkGroup sections={sidebarMenu.setting} cur={pathname} />
    </aside>
  );
};

export default Sidebar;
