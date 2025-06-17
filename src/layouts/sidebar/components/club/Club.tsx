import { ArrowRight } from "lucide-react";

import QuickLinkGroup from "../quicklink/QuickLinkGroup";

import type { SidebarMenuSection } from "@interfaces/menu";

import styles from "./Club.module.scss";

interface Props {
  sections: SidebarMenuSection[];
  cur: string;
}

const Club = ({ sections, cur }: Props) => {
  return (
    <div className={styles.clubContainer}>
      <h3 className={styles.clubTitle}> 내 모임 </h3>
      <QuickLinkGroup
        sections={[
          ...sections,
          {
            label: "더보기",
            icon: ArrowRight,
            iconDirection: "right",
            path: "/clubs",
          },
        ]}
        cur={cur}
        ifn
      />
    </div>
  );
};

export default Club;
