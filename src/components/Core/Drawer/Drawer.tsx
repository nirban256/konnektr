import Image from "next/image";
import React from "react";
import FollowerSectionItem from "../../profile/FollowerSectionItem";
import DrawerItems from "./DrawerItems";
import {
  Profile,
  Message,
  Setting2,
  Wallet2,
  NotificationStatus,
  LoginCurve,
} from "iconsax-react";
import { useRouter } from "next/router";
import { useAppStateContext } from "../../../context/contextProvider";

type Drawer = {
  isLoggedIn?: boolean;
};

const Drawer = () => {
  const router = useRouter();
  const {
    // @ts-ignore
    setIsDrawerOpen,
  } = useAppStateContext();
  return (
    <div
      className={` flex flex-col items-center justify-start z-[100] lg:hidden fixed bottom-0 w-full h-[70vh] rounded-t-[30px] bg-drawerBg backdrop-blur-[50px] shadow-drawer overflow-hidden pt-3 px-2 box-border`}
    >
      <div className="w-full h-[25%] bg-transparent flex items-center justify-between">
        <Image
          height={80}
          width={80}
          className="rounded-full -mt-2"
          src={"/assets/images/image.png"}
          alt={""}
        />
        <div className="w-[73%] h-[90%] bg-transparent flex flex-col items-center justify-between py-2 box-border">
          <h1 className="self-start font-poppins text-[0.95rem] text-sideBarLink font-bold">
            Shivraj
          </h1>
          <span className="self-start font-poppins text-[0.75rem] text-sideBarLink font-light ">
            @kewcoder
          </span>
          <div className="w-full h-[45%] flex items-center justify-between pr-2 box-border mt-1 ">
            <FollowerSectionItem title="Followers" value={100} />
            <FollowerSectionItem title="Following" value={20} />
            <FollowerSectionItem title="Communities" value={"20+"} />
          </div>
        </div>
      </div>
      <div className="w-full h-[60%] bg-transparent flex flex-col items-start justify-start px-5 pt-1 box-border">
        <DrawerItems
          title={"Profile"}
          icon={<Profile className="text-sideBarLink" size={"24"} />}
          onClick={() => {
            setIsDrawerOpen(false);
            router.push("/profile");
          }}
        />
        <DrawerItems
          title={"Messages"}
          icon={<Message className="text-sideBarLink" size={"24"} />}
          onClick={() => {
            setIsDrawerOpen(false);
            router.push("/messages");
          }}
        />
        <DrawerItems
          title={"Settings"}
          icon={<Setting2 className="text-sideBarLink" size={"24"} />}
          onClick={() => setIsDrawerOpen(false)}
        />
        <DrawerItems
          title={"Wallet"}
          icon={<Wallet2 className="text-sideBarLink" size={"24"} />}
          onClick={() => setIsDrawerOpen(false)}
        />
        <DrawerItems
          title={"Notifications"}
          icon={<NotificationStatus className="text-sideBarLink" size={"24"} />}
          onClick={() => setIsDrawerOpen(false)}
        />
        <DrawerItems
          title={"Log Out"}
          icon={<LoginCurve className="text-sideBarLink" size={"24"} />}
          onClick={() => setIsDrawerOpen(false)}
        />
      </div>
    </div>
  );
};

export default Drawer;
