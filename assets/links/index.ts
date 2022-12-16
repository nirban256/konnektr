import { AiFillHome } from "react-icons/ai";
import {
  BsThreeDots,
  BsQuestionDiamondFill,
  BsFillGearFill,
} from "react-icons/bs";
import { RiShoppingBag3Fill, RiMessage2Fill } from "react-icons/ri";
import { FaUsers, FaUserPlus, FaBell } from "react-icons/fa";

export const menuItems = [
  { id: 1, label: "Home", icon: AiFillHome, link: "/", active: true },
  {
    id: 2,
    label: "Konnektions",
    icon: FaUserPlus,
    link: "/konnektions",
    active: true,
  },
  {
    id: 3,
    label: "Communities",
    icon: FaUsers,
    link: "/communities",
    active: true,
  },
  {
    id: 4,
    label: "Quests",
    icon: BsQuestionDiamondFill,
    link: "/quests",
    active: true,
  },
  // { id: 4, label: "Messages", icon: RiMessage2Fill, link: "/messages", active: false },
  {
    id: 5,
    label: "Store",
    icon: RiShoppingBag3Fill,
    link: "/store",
    active: true,
  },
];

export const menuItems1 = [
  {
    id: 4,
    label: "Settings",
    icon: BsFillGearFill,
    link: "/settings",
    active: true,
  },
  {
    id: 6,
    label: "Notifications",
    icon: FaBell,
    link: "/notifications",
    active: true,
  },
];

module.exports = { menuItems, menuItems1 };
