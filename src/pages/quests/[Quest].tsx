import React from "react";
import Header from "../../components/profile/Header";
import DashboardLayout from "../../layout/dashboard";

const Quest = () => {
  return (
    <DashboardLayout>
      <div className="w-screen min-h-screen flex flex-col items-center justify-start lg:justify-center bg-white lg1100:mr-[1%] lg1200:mr-[1%] lg1300:mr-[2%] xl1400:mr-[10%] xl1500:mr-[16%]">
        <Header />
        <div className="w-full h-auto lg:h-[85%]  bg-questBg rounded-[30px] flex flex-col lg:flex-row items-center justify-start p-5 box-border">
          <div className="w-full lg:w-[50%] h-full flex flex-col items-center justify-start">
            <div className="flex items-center justify-between w-full lg:self-start lg:w-[60%] h-auto ">
              <div className="h-[90px] w-[90px] flex items-center justify-center rounded-[20px] bg-messageBox">
                <img
                  src="/assets/svg/logo.svg"
                  alt=""
                  className="h-[45px] w-[47px]"
                />
              </div>
              <h1 className="text-[1.5rem] font-bold text-sideBarLink mr-5">
                Get Access <br />
                To konnektr
              </h1>
            </div>
            <h1 className="text-sideBarLink font-semibold text-[1.3rem] my-6 self-start">
              Reward
            </h1>
            <h1 className="text-sideBarLink font-bold text-[1.3rem] mb-2 self-start">
              Details
            </h1>
            <p className="text-sideBarLink font-normal text-[0.82rem] break-words self-start">
              Konnektr is a web3 platform which lets you find connections and
              grow your network easily and effectively while you earn crypto
              alongside it. We understand how annoying gas fees are. So we are
              building a gasless web3 environment which is very user friendly.
              WE have our own NFT marketplace where people can mint, sale and
              trade NFTs. Moreover, it is all no-code. We are a truly
              decentralized Social Network. We value privacy by keeping data
              safe, no censorship, built on lens protocol. Navigate through
              multiple communities, and DAOs and connect with the ones you're
              interested in.
            </p>
            <h1 className="text-sideBarLink font-bold text-[1.5rem] my-3 self-start">
              Steps
            </h1>
            <div className="flex flex-col items-start justify-start h-auto w-full">
              <p className="text-sideBarLink font-normal text-[0.78rem] my-1">
                1. Complete captcha
              </p>
              <p className="text-sideBarLink font-normal text-[0.78rem] mb-1">
                2. Connect wallet
              </p>
              <p className="text-sideBarLink font-normal text-[0.78rem] mb-1">
                3. Social verification
              </p>
            </div>
          </div>
          <div className="w-full h-full lg:w-[50%]  flex flex-col items-center justify-start">
            <img
              src="/assets/svg/image-quest.svg"
              alt=""
              className="w-[100%] max-w-[250px] h-[20vh] max-h-[150px] rounded-[12px]"
            />
            <div className="w-[100%] h-auto py-2 box-border flex flex-col items-center justify-evenly my-1">
              <div className="w-[90%] flex items-center justify-between mb-1">
                <span className="text-sideBarLink font-normal text-[0.78rem]">
                  Quests claimed
                </span>
                <span className="text-sideBarLink font-normal text-[0.78rem]">
                  236/5000
                </span>
              </div>
              <div className="relative w-[90%] h-[20px] rounded-[30px] bg-messageBox p-[1px] shadow-md">
                <div
                  className={`absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-gradient1 to-gradient2 rounded-[29px]`}
                ></div>
              </div>
            </div>

            <div className="w-[100%] h-auto py-2 box-border flex flex-col items-center justify-evenly my-1">
              <div className="w-[90%] flex items-center justify-between mb-1">
                <span className="text-sideBarLink font-normal text-[0.78rem]">
                  Quests claimed
                </span>
                <span className="text-sideBarLink font-normal text-[0.78rem]">
                  236/5000
                </span>
              </div>
              <div className="relative w-[90%] h-[20px] rounded-[30px] bg-messageBox p-[1px] shadow-md ">
                <div
                  className={`absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-gradient1 to-gradient2 rounded-[29px]`}
                ></div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full px-0 lg:px-5  bg-transparent">
              <h1 className="text-sideBarLink font-medium  font-Inter text-[1.8rem]">
                Steps
              </h1>
              <span className="text-sideBarLink font-medium  font-Inter text-[0.8rem] my-2">
                1. Follow KonnektrHQ on Twitter
              </span>
              <span className="text-sideBarLink font-medium  font-Inter text-[0.8rem] my-2">
                2. Follow KonnektrHQ on Twitter
              </span>
              <span className="text-sideBarLink font-medium  font-Inter text-[0.8rem] my-2">
                3. Follow KonnektrHQ on Twitter
              </span>
            </div>
            <button className="w-[120px] h-[35px] flex items-center justify-center bg-gradient-to-tr from-text_gradient1 to-text_gradient2 text-white text-[1rem] font-semibold rounded-[5px] my-3">
              Claim Now
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Quest;
