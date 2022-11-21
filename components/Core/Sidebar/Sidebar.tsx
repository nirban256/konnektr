import React, { useMemo } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";
import { Tooltip } from "@mantine/core_old";
import { menuItems, menuItems1 } from "../../../assets/links";
import { useAppStateContext } from "../../../context/contextProvider";

export const Sidebar = () => {
  const router = useRouter();

  // @ts-ignore
  const { sidebarToggleCollapse, setSidebarToggleCollapse } =
    useAppStateContext();

  const activeMenu: any = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen pt-1 bg-light hidden lg:flex justify-between flex-col transition-all duration-500 bg-bgBlack1 rounded-tr-3xl rounded-br-3xl overflow-hidden",
    {
      ["w-80"]: !sidebarToggleCollapse,
      ["w-20"]: sidebarToggleCollapse,
      absolute: false,
    }
  );

  const getNavItemClasses = (menu: {
    id: number;
    label: string;
    link: string;
  }) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-bgGrey2 overflow-hidden whitespace-nowrap transition-all duration-500 rounded my-0.5",
      {
        ["bg-bgGrey1 bg-opacity-15"]: activeMenu?.id === menu.id,
      }
    );
  };

  const getNavItemLinkClasses = () =>
    classNames(
      "flex py-4 px-3 items-center h-full transition-all duration-500",
      {
        "w-60 gap-3": !sidebarToggleCollapse,
        "w-12": sidebarToggleCollapse,
      }
    );

  const getNavItemIndicatorCLasses = (menu: {
    id: number;
    label: string;
    link: string;
  }) =>
    classNames(
      "absolute h-full bg-white bg-opacity-80 transition-all duration-500 w-1 opacity-0",
      {
        "opacity-100": menu.link === router.pathname && !sidebarToggleCollapse,
      }
    );

  return (
    <div
      className={wrapperClasses}
      id="sidebar"
      onMouseEnter={() => {
        setSidebarToggleCollapse(false);
      }}
      onMouseLeave={() => {
        setSidebarToggleCollapse(true);
      }}
    >
      <div className="flex flex-col gap-14">
        <div
          className="flex items-center justify-between relative px-4"
          id="sidebar-header"
        >
          <div className="flex items-center pl-1 gap-54 rounded-md py-2 pr-1">
            <img
              src="/assets/images/konnektr_logo_white.png"
              alt="konnektr_logo"
              className={`w-12 relative right-0.5`}
            />
            <h1
              className={classNames(
                "mt-2 ml-2 text-3xl font-semibold text-white pr-3 relative bottom-1 font_exo2",
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
                  classNames={{ body: "bg-bgBlack1" }}
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
                                menu.active ? "text-white" : "text-bgGrey3"
                              }`}
                              size={25}
                            />
                          </div>
                        ) : (
                          <Icon
                            className={`${
                              menu.active ? "text-white" : "text-bgGrey3"
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
                            menu.active ? "text-white" : "text-bgGrey3"
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
                            <Icon color="white" size={25} />
                          </div>
                        ) : (
                          <Icon color="white" size={25} />
                        )}
                      </div>
                      {!sidebarToggleCollapse && (
                        <span className="text-md text-white font_inter">
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
          className="flex items-center mt-3 rounded gap-3 bg-bgGrey2 hover:bg-white hover:bg-opacity-10 px-4 h-20 cursor-pointer w-full transition-all duration-300 rounded-br-3xl"
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
              <p className="text-white font-semibold font_inter">
                Athul Vishnu
              </p>
              <p className="text-white text-opacity-50 font_inter">@Vichu20</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
