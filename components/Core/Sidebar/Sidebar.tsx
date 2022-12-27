import React, { useMemo } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";
import { menuItems, menuItems1, sideBarLinks } from "../../../assets/links";
import { useAppStateContext } from "../../../context/contextProvider";

export const Sidebar = () => {
  const router = useRouter();

  // @ts-ignore
  const { sidebarToggleCollapse, setSidebarToggleCollapse } =
    useAppStateContext();

  // const activeMenu: any = useMemo(
  //   () => menuItems.find((menu) => menu.link === router.pathname),
  //   [router.pathname]
  // );

  const wrapperClasses = classNames(
    "h-screen pt-1 bg-white hidden lg:flex justify-between flex-col transition-all duration-500 bg-white rounded-tr-3xl rounded-br-3xl duration-500 overflow-hidden lg1100:ml-[1%] lg1200:ml-[1%] lg1300:ml-[3%] xl1400:ml-[10%] xl1500:ml-[16%]",
    {
      ["w-80 "]: !sidebarToggleCollapse,
      ["w-20"]: sidebarToggleCollapse,
      absolute: false,
    }
  );

  // const getNavItemClasses = (menu: {
  //   id: number;
  //   label: string;
  //   link: string;
  // }) => {
  //   return classNames(
  //     "flex w-full items-center cursor-pointer hover:bg-bgDropDown overflow-hidden whitespace-nowrap transition-all duration-500 rounded my-0.5",
  //     {
  //       ["bg-gray-200  bg-opacity-15"]: activeMenu?.id === menu.id,
  //     }
  //   );
  // };

  // const getNavItemLinkClasses = () =>
  //   classNames(
  //     "flex py-4 px-3 items-center h-full transition-all duration-500",
  //     {
  //       "w-70 gap-3": !sidebarToggleCollapse,
  //       "w-16": sidebarToggleCollapse,
  //     }
  //   );

  // const getNavItemIndicatorCLasses = (menu: {
  //   id: number;
  //   label: string;
  //   link: string;
  // }) =>
  //   classNames(
  //     "absolute h-full bg-white bg-opacity-80 transition-all duration-500 w-1 opacity-0",
  //     {
  //       "opacity-100": menu.link === router.pathname && !sidebarToggleCollapse,
  //     }
  //   );

  return (
    <div
      className={wrapperClasses}
      id="sidebar"
      // onMouseEnter={() => {
      //   setSidebarToggleCollapse(false);
      // }}
      // onMouseLeave={() => {
      //   setSidebarToggleCollapse(true);
      // }}
    >
      {/* <div className="flex flex-col gap-14">
        <div
          className="flex items-center justify-between relative px-4"
          id="sidebar-header"
        >
          <div className="flex items-center pl-1 gap-54 rounded-md py-2 pr-1">
            <img
              src="/assets/images/konnektr_logo_white.png"
              alt="konnektr_logo"
              className={`w-7 relative right-0.5`}
            />
            <h1
              className={classNames(
                "mt-2 ml-2 text-3xl font-semibold text-sideBarLink pr-3 relative bottom-1 font_exo2",
                {
                  "opacity-0": sidebarToggleCollapse,
                  hidden: sidebarToggleCollapse,
                }
              )}
            >
              Konnektr
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-start px-4">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            return (
              <div key={menu.id} className={getNavItemClasses(menu)}>
                <Tooltip
                  label={menu.active ? menu.label : "Coming soon !"}
                  placement="center"
                  position="right"
                  gutter={50}
                  classNames={{ body: "bg-black" }}
                >
                  <div
                    className={classNames(getNavItemIndicatorCLasses(menu))}
                  />
                  <Link href={menu.link}>
                    <a className={getNavItemLinkClasses()}>
                      <div className="">
                        {menu.label === "Messages" ? (
                          <div className="relative w-fit">
                            <span className="absolute bg-badgeRed1 rounded-full w-2.5 h-2.5 right-0 -top-0.5" />
                            <Icon
                              className={`${
                                menu.active ? "text-sideBarLink" : "text-black"
                              }`}
                              size={25}
                            />
                          </div>
                        ) : (
                          <Icon
                            className={`${
                              menu.active ? "text-sideBarLink" : "text-black"
                            }`}
                            size={25}
                          />
                        )}
                      </div>
                      {!sidebarToggleCollapse && (
                        <span
                          className={`text-md font-medium opacity-0 ${
                            !sidebarToggleCollapse && "opacity-100"
                          } transition-all duration-500 ${
                            menu.active ? "text-sideBarLink" : "text-black"
                          } font_inter`}
                        >
                          {menu.label}
                        </span>
                      )}
                    </a>
                  </Link>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-start px-4">
          {menuItems1.map(({ icon: Icon, ...menu }) => {
            return (
              <div key={menu.id} className={getNavItemClasses(menu)}>
                <Tooltip
                  label={menu.active ? menu.label : "Coming soon !"}
                  withArrow
                  placement="center"
                  position="right"
                  gutter={50}
                >
                  <div
                    className={classNames(getNavItemIndicatorCLasses(menu))}
                  />
                  <Link href={menu.link}>
                    <a className={getNavItemLinkClasses()}>
                      <div className="">
                        {menu.label === "Notifications" ? (
                          <div className="relative w-fit">
                            <span className="absolute bg-badgeRed1 rounded-full w-2.5 h-2.5 right-0" />
                            <Icon className="text-sideBarLink" size={25} />
                          </div>
                        ) : (
                          <Icon className="text-sideBarLink" size={25} />
                        )}
                      </div>
                      {!sidebarToggleCollapse && (
                        <span className="text-md text-sideBarLink font_inter">
                          {menu.label}

                          {menu.label === "Notifications" && (
                            <span className="ml-5 bg-badgeRed1 rounded-full px-2.5 py-1 text-xs font_inter">
                              99+
                            </span>
                          )}
                        </span>
                      )}
                    </a>
                  </Link>
                </Tooltip>
              </div>
            );
          })}
        </div>
        <div
          onClick={() => router.push("/profile")}
          className="flex items-center mt-3 rounded gap-3 bg-white hover:bg-white hover:bg-opacity-10 px-4 h-20 cursor-pointer w-full transition-all duration-300 rounded-br-3xl"
          id="sidebar-profile"
        >
          <img
            src="assets/images/avatar13.jpg"
            alt="Profile Image"
            className="w-11 h-11 rounded-full object-cover inline-block"
            style={{ width: "44px", height: "44px" }}
          />
          {!sidebarToggleCollapse && (
            <div className={`h-12 overflow-hidden`}>
              <p className=" font-semibold font_inter text-sideBarLink">
                Athul Vishnu
              </p>
              <p className="text-sideBarLink text-opacity-50 font_inter">
                @Vichu20
              </p>
            </div>
          )}
        </div>
      </div> */}
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="flex items-center justify-start w-full pl-1 gap-54 rounded-md py-2 pr-1">
          <img
            src="/assets/images/konnektr_logo_white.png"
            alt="konnektr_logo"
            className={`w-7 relative right-0.5`}
          />
          <h1
            className={classNames(
              "mt-2 ml-2 text-3xl font-semibold text-sideBarLink pr-3 relative bottom-1 font_exo2",
              {
                "opacity-0": sidebarToggleCollapse,
                hidden: sidebarToggleCollapse,
              }
            )}
          >
            Konnektr
          </h1>
        </div>
        <div className="flex flex-col items-center justify-start w-full h-[50%] -mt-[10%]">
          {sideBarLinks.map((item, i) => (
            <div
              key={item.id}
              onClick={() => router.push(item.link)}
              className="flex items-center justify-start w-full h-[50px] my-1 bg-white pl-[5%] cursor-pointer"
            >
              <img
                src={item.link == router.pathname ? item.active : item.image}
                alt=""
                className="w-[20px] h-[20px] mr-5"
              />
              <h1
                className={`${
                  item.link == router.pathname
                    ? "text-transparent  bg-clip-text bg-gradient-to-tr from-text_gradient1 to-text_gradient2"
                    : "bg-white text-sideBarLink"
                } font-extrabold  text-[20px]`}
              >
                {item.label}
              </h1>
            </div>
          ))}
        </div>
        <div
          onClick={() => router.push("/profile")}
          className="w-full h-[10%] flex items-center justify-between px-4 box-border mb-5 cursor-pointer"
        >
          <div className="flex items-center justify-start w-[55%] h-full ">
            <img
              src="/assets/images/image.png"
              alt=""
              className="w-[39px] h-[50px] rounded-[30px] "
            />
            <div className="flex flex-col items-start justify-evenly w-full h-[20%] ml-2">
              <h1 className="text-[0.9rem] text-sideBarLink font-bold ">
                Shivrajj
              </h1>
              <h1 className="text-[0.78rem] text-sideBarLink font-light">
                @kewcoder
              </h1>
            </div>
          </div>
          <img
            src="/assets/svg/quest.svg"
            alt=""
            className="h-[20px] w-[20px]"
          />
          <img
            src="/assets/svg/settings.svg"
            alt=""
            className="h-[24px] w-[24px]"
          />
        </div>
      </div>
    </div>
  );
};
