import QuickLink from "./QuickLink";

import type { SidebarMenuSection } from "@interfaces/menu";

interface Props {
  sections: SidebarMenuSection[];
  cur: string;
  // icon fill none
  ifn?: boolean;
}

const QuickLinkGroup = ({ sections, cur, ifn = false }: Props) => {
  return (
    <div>
      {sections.map((section) => {
        return <QuickLink section={section} cur={cur} ifn={ifn} />;
      })}
    </div>
  );
};

export default QuickLinkGroup;
