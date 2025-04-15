import { IconType } from "react-icons/lib";
import {
  LuLayoutDashboard,
  LuAtom,
  LuShieldCheck,
} from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { RiBookShelfLine } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
type NavListType = {
  id: number;
  name: string;
  icon: IconType;
  route: string;
};

export const navList: NavListType[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: LuLayoutDashboard,
    route: "/dashboard",
  },
  {
    id: 2,
    name: "Explore",
    icon: LuAtom,
    route: "/dashboard/explore",
  },
  {
    id: 3,
    name: "Upgrade",
    icon: LuShieldCheck,
    route: "/dashboard/upgrade",
  },
  {
    id: 4,
    name: "Youtube",
    icon: FaYoutube,
    route: "/dashboard/youtube",
  },
  {
    id: 5,
    name: "Recommendations",
    icon: RiBookShelfLine,
    route: "/dashboard/recommendations",
  },
  {
    id: 6,
    name: "Roadmap",
    icon: GoProjectRoadmap,
    route: "/dashboard/roadmap",
  },
];
