import { Link } from "react-router-dom";

import type { SidebarMenuSection } from "@interfaces/menu";

import styles from "./QuickLink.module.scss";

interface Props {
  section: SidebarMenuSection;
  cur: string;
  // icon fill none
  ifn?: boolean;
}

const QuickLink = ({ section, cur, ifn = false }: Props) => {
  const isActivate = cur === section.path;
  const direction = section.iconDirection ?? "left";

  return (
    <Link
      key={section.path}
      to={section.path}
      className={`${styles.linkItem} ${
        isActivate ? styles.linkItemActivate : ""
      }`}
    >
      {direction === "left" && (
        <section.icon
          className={styles.linkIcon}
          fill={isActivate && !ifn ? "black" : "none"}
        />
      )}
      <span
        className={styles.linkItem}
        style={isActivate ? { fontWeight: "600" } : undefined}
      >
        {section.label}
      </span>

      {direction === "right" && <section.icon className={styles.linkIcon} />}
    </Link>
  );
};

export default QuickLink;
