import { TextInput } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import GradientButton from "../../components/konnektions/GradientButton";
import CommunityListItem from "../../components/profile/CommunityListItem";
import FollowerSectionItem from "../../components/profile/FollowerSectionItem";
import Header from "../../components/profile/Header";
import SharedPosts from "../../components/profile/SharedPosts";
import Tag from "../../components/profile/Tags";
import { useAppStateContext } from "../../context/contextProvider";
import DashboardLayout from "../../layout/dashboard";

const Profile: NextPage = () => {
  const {
    // @ts-ignore
    sidebarToggleCollapse,
  } = useAppStateContext();

  const [tags, setTags] = useState<string[]>(Array(4).fill("GraphQL"));
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="w-[100%] h-[100vh] flex flex-col sm:flex-row items-start justify-between bg-white pb-16 sm:pb-0 box-border overflow-x-hidden">
        <Header />
        <div className="h-full w-full sm:w-[68%] flex flex-col items-center justify-start overflow-y-scroll scrollbar-hide px-2 lg:px-0 box-border">
          <div className="w-full h-[70vh] flex flex-col items-center justify-start">
            <div className="relative w-[100%] h-[30vh] max-h-[110px] sm:max-h-[160px] bg-bgCover  bg-no-repeat bg-center bg-cover rounded-t-[30px] mt-0 lg:mt-2">
              <img
                src="/assets/images/image.png"
                alt="profilepic"
                className="absolute left-4 -bottom-[40px] sm:-bottom-[50px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full"
              />
              <div className="absolute top-4 right-4 w-[50px] h-[18px] rounded-[100px] bg-bgCoverDark flex items-center justify-center ">
                <MdOutlineModeEditOutline
                  size={11}
                  color="black"
                  className="mr-1"
                />
                <h1 className="text-[0.5rem] text-black mt-[1px]">Edit</h1>
              </div>
            </div>
            <div
              className={`self-end ${
                sidebarToggleCollapse ? "w-[70%] sm:w-[85%]" : "w-[75%]"
              } h-[6vh] sm:h-[12vh] bg-transparent flex items-center justify-between duration-500`}
            >
              <div className="w-[30%] h-full flex flex-col items-start justify-evenly pl-1 box-border">
                <h1 className="text-sideBarLink text-[0.9rem] sm:text-[1.5rem] font-bold ml-3 lg:ml-0">
                  Shivrajjj
                </h1>
                <h1 className="text-sideBarLink text-[0.75rem] font-light">
                  @kewcoder
                </h1>
              </div>
              <div className="flex items-center sm:items-start justify-evenly w-[60%] sm:w-[30%] h-full pt-[1%] box-border ">
                <GradientButton classname="w-[20%] min-w-[80px] sm:w-[50%]  sm:min-w-[100px] sm:max-w-[150px] h-[60%] min-h-[25px] max-h-[30px]  sm:max-h-[30px] rounded-[20px] text-white text-[0.8rem] font-bold ">
                  Konnekt
                </GradientButton>
                <button className="min-w-[35px]  sm:min-w-[70px] sm:max-w-[130px] h-[60%] min-h-[30px] sm:min-h-[30px] max-h-[30px] sm:max-h-[32px] rounded-[20px] flex items-center justify-center bg-bgDropDown">
                  <AiOutlineMessage
                    className="hidden sm:flex text-black"
                    size={20}
                  />
                  <AiOutlineMessage
                    className="flex sm:hidden text-black"
                    size={17}
                  />
                </button>
              </div>
            </div>
            <p
              className={`self-start ${
                sidebarToggleCollapse
                  ? "max-w-[90%] sm:max-w-[50%]"
                  : "max-w-[60%]"
              } mt-3 mb-0 sm:mb-2 font-light text-[0.85rem] sm:text-[0.97rem] text-profileDesc duration-500`}
            >
              Blockchain | LearnWeb3dao | Intern @Buildspace | Code is law ✌ |
              Web3 Developer | Building Konnektr
            </p>
            <div className="w-full h-[12vh] flex items-center justify-between my-1">
              <div
                className={`${
                  sidebarToggleCollapse ? "w-[65%] sm:w-[40%]" : "w-[60%]"
                } h-full flex items-center sm:items-start justify-between duration-500`}
              >
                <FollowerSectionItem title="Followers" value={100} />
                <FollowerSectionItem title="Following" value={20} />
                <FollowerSectionItem title="Communities" value={"20+"} />
              </div>
              <div className="w-[30%] sm:w-[20%] h-full flex items-center justify-between pr-1 box-border">
                <button className="w-[40%] max-w-[65px] h-full max-h-[50px] rounded-[10px] bg-bgCover flex flex-col items-center justify-center">
                  <img
                    src="/assets/svg/walletmoney.svg"
                    alt=""
                    className="h-[18px] sm:h-[25px] w-[18px] sm:w-[25px] "
                  />
                  <h1 className="text-sideBarLink font-semibold text-[0.5rem] leading-[9px]">
                    Connect
                    <br />
                    Wallet
                  </h1>
                </button>
                <button className="w-[40%] max-w-[65px] h-full max-h-[50px] rounded-[10px] bg-bgCover flex flex-col items-center justify-center">
                  <img
                    src="/assets/svg/global.svg"
                    alt=""
                    className="h-[18px] sm:h-[25px] w-[18px] sm:w-[25px] "
                  />
                  <h1 className="text-sideBarLink font-semibold text-[0.5rem] leading-[9px]">
                    Place in
                    <br />
                    Internet
                  </h1>
                </button>
              </div>
            </div>
            <div
              className={`self-start ${
                tags.length == 4
                  ? `${
                      sidebarToggleCollapse
                        ? "w-[80%] sm:w-[60%]"
                        : " sm:w-[70%]"
                    }`
                  : `${sidebarToggleCollapse ? "w-full sm:w-[70%]" : "w-[78%]"}`
              } min-h-[8vh] grid ${
                tags.length == 4 ? "grid-cols-3" : "grid-cols-4"
              } gap-x-3 gap-y-2 duration-100  sm:mb-7`}
            >
              {tags.map((item, index) => (
                <Tag key={index} name={item} />
              ))}
              <h1
                onClick={() =>
                  setTags(
                    tags.length == 4
                      ? Array(10).fill("GraphQL")
                      : Array(4).fill("GraphQL")
                  )
                }
                className="cursor-pointer text-sideBarLink font-light text-[0.7rem] pt-2"
              >
                {tags.length == 4 ? "see more" : "see less"}
              </h1>
            </div>
          </div>
          <h1 className="self-start text-sideBarLink font-bold text-[1rem] sm:text-[0.97rem] mt-2 sm:mt-1 mb-5">
            Shared Posts
          </h1>
          <div className="w-full flex flex-col items-center justify-start gap-y-4">
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
            />
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
              image={"/assets/images/web3Bharat.png"}
            />
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
            />
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
              image={"/assets/images/web3Bharat.png"}
            />
          </div>
        </div>
        <section className=" hidden h-full w-[30%] min-w-[320px] sm:flex flex-col items-center justify-start lg1100:mr-[1%] lg1200:mr-[1%] lg1300:mr-[2%] xl1400:mr-[10%] xl1500:mr-[16%] ml-0 lg:ml-3">
          <div className="w-full h-[10%] flex items-center justify-between">
            <div
              className={`w-[70%] ${
                sidebarToggleCollapse ? "min-w-[200px]" : "min-w-[180px]"
              } h-[50px] rounded-[30px] flex items-center justify-start bg-bgDropDown text-black pl-3 box-border   oveflow-hidden  duration-500`}
            >
              <FaSearch />
              <input
                type="text"
                placeholder="Search"
                className="w-[85%] h-full text-black pl-3 bg-transparent placeholder:text-sideBarLink placeholder:font-bold focus:outline-none"
              />
            </div>
            <button
              onClick={() => router.push("/messages")}
              className="w-[20%] min-w-[90px] h-[50px] rounded-[30px] flex items-center justify-center bg-bgDropDown"
            >
              <img
                src="/assets/svg/message.svg"
                alt=""
                className="h-[25px] w-[25px]"
              />
            </button>
          </div>
          <div className="mt-3 w-full h-[50vh] bg-bgDropDown rounded-[30px] flex flex-col items-center overflow-y-scroll scrollbar-hide justify-start">
            <h1 className="self-start ml-4 text-communityheading text-[1.35rem] font-bold mt-4 mb-2">
              Your Communities
            </h1>
            {/* <div className="flex flex-col items-center justify-start w-full  "> */}
            <CommunityListItem
              title="Chainlink"
              image={"/assets/svg/chainlink.svg"}
            />
            <CommunityListItem
              title="Polygon"
              image={"/assets/svg/polygon.svg"}
            />
            <CommunityListItem
              title="Web3 Bharat"
              image={"/assets/images/web3Bharat.png"}
            />
            <CommunityListItem
              title="Build Space"
              image={"/assets/svg/buildspace.svg"}
            />
            <CommunityListItem
              title="Chainlink"
              image={"/assets/svg/chainlink.svg"}
            />
            <CommunityListItem
              title="Polygon"
              image={"/assets/svg/polygon.svg"}
            />
            <CommunityListItem
              title="Web3 Bharat"
              image={"/assets/images/web3Bharat.png"}
            />
            <CommunityListItem
              title="Build Space"
              image={"/assets/svg/buildspace.svg"}
            />
            {/* </div> */}
          </div>
          <div className="w-full h-[30vh] flex flex-col items-center justify-evenly border-[1px] border-goldBorder bg-goldBg rounded-[30px] mt-2 px-[8%] py-[3%] box-border">
            <h1 className="self-start text-goldText font-bold text-[1.1rem] mb-2">
              Beta warning!
            </h1>
            <p className="text-[0.8rem] text-lightGold font-light mt-1 mb-3 ">
              Konnektr is still in the beta phase,things may break,please handle
              us with care.
            </p>
            <p className="text-[0.9rem] font-semibold text-profileDesc">
              © 2022 konnektr Privacy Discord Donate Status Vote Feedback hanks
              GitHub▲ Powered by Vercel
            </p>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
