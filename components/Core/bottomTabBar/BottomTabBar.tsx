import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const bottomMenuItems = [
  {
    id: 1,
    label: "Home",
    icon: "/assets/svg/Home.svg",
    iconActive: "/assets/svg/ActiveHome.svg",
    link: "/",
  },
  {
    id: 2,
    label: "Konnektions",
    icon: "/assets/svg/konnektions.svg",
    iconActive: "/assets/svg/ActiveKonnektions.svg",
    link: "/konnektions",
  },

  {
    id: 3,
    label: "Quests",
    icon: "/assets/svg/quest.svg",
    iconActive: "/assets/svg/Activequest.svg",
    link: "/quests",
  },
  // { id: 4, label: "Messages", icon: RiMessage2Fill, link: "/messages", active: false },
  {
    id: 4,
    label: "Store",
    icon: "/assets/svg/save.svg",
    iconActive: "/assets/svg/ActiveStore.svg",
    link: "/store",
  },
  {
    id: 5,
    label: "Profile",
    icon: "/assets/svg/Profile.svg",
    iconActive: "/assets/svg/ActiveProfile.svg",
    link: "/profile",
  },
];

type tab = "home" | "konnektions" | "quests" | "store" | "profile";

function BottomTabBar() {
  const [active, setActive] = useState<tab>("home");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.toString() === "/") {
      setActive("home");
    } else {
      setActive(router.pathname.toString().slice(1, 20) as tab);
    }
  }, [router.pathname]);

  return (
    <div className="fixed z-[100] sm:hidden bottom-0 w-full h-[10vh] max-h-[70px] flex items-center justify-between rounded-t-[15px] bg-white">
      {bottomMenuItems.map((item, index) => (
        <Link
          key={index}
          // onClick={() => setActive(item.label.toLowerCase() as tab)}
          className="w-full h-full flex flex-col items-center justify-center"
          href={item.link}
        >
          <div
            onClick={() => setActive(item.label.toLowerCase() as tab)}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <img
              src={
                active == item.label.toLowerCase() ? item.iconActive : item.icon
              }
              alt=""
              className="h-[22px] w-[22px]"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BottomTabBar;
