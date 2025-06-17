import { SettingsIcon, CircleIcon } from "lucide-react";
import HomeIcon from "@icons/home.svg?react";

export const sidebarMenu = {
  default: [
    {
      label: "홈",
      icon: HomeIcon,
      path: "/",
    },
  ],
  club: [
    {
      label: "모임 정보",
      icon: SettingsIcon,
      path: "/",
    },
    {
      label: "모임 인원",
      icon: SettingsIcon,
      path: "/",
    },
    {
      label: "매크로 설정",
      icon: SettingsIcon,
      path: "/",
    },
  ],
  setting: [
    {
      label: "설정",
      icon: SettingsIcon,
      path: "/settings",
    },
  ],
};

export const clubSamples = [
  {
    label: "test 1",
    icon: CircleIcon,
    path: "/club/@test1",
  },
  {
    label: "test 2",
    icon: CircleIcon,
    path: "/club/@test2",
  },
  {
    label: "test 3",
    icon: CircleIcon,
    path: "/club/@test3",
  },
  {
    label: "test 4",
    icon: CircleIcon,
    path: "/club/@test4",
  },
  {
    label: "test 5",
    icon: CircleIcon,
    path: "/club/@test5",
  },
  {
    label: "test 6",
    icon: CircleIcon,
    path: "/club/@test6",
  },
  {
    label: "test 7",
    icon: CircleIcon,
    path: "/club/@test7",
  },
];
