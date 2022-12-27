import React from "react";
import Header from "../../components/profile/Header";

const Quest = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-start bg-white lg1100:mr-[1%] lg1200:mr-[1%] lg1300:mr-[2%] xl1400:mr-[10%] xl1500:mr-[16%]">
      <Header />
      <div className="w-[85%] h-screen bg-bgCover rounded-[30px] flex flex-col items-center justify-start p-5 box-border">
        <div className="flex items-center justify-between w-full h-auto ">
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
          Rewards
        </h1>
        <h1 className="text-sideBarLink font-bold text-[1.3rem] mb-2 self-start">
          Details
        </h1>
        <p className="text-sideBarLink font-normal text-[0.82rem] break-words self-start">
          Konnektr is a web3 platform which lets you find connections and grow
          your network easily and effectively while you earn crypto alongside
          it. We understand how annoying gas fees are. So we are building a
          gasless web3 environment which is very user friendly. WE have our own
          NFT marketplace where people can mint, sale and trade NFTs. Moreover,
          it is all no-code. We are a truly decentralized Social Network. We
          value privacy by keeping data safe, no censorship, built on lens
          protocol. Navigate through multiple communities, and DAOs and connect
          with the ones you're interested in.
        </p>
        <h1 className="text-sideBarLink font-bold text-[1.5rem] my-3 self-start">
          Steps
        </h1>
        <div className="flex flex-col items-start justify-start h-auto w-full">
          <p className="text-sideBarLink font-normal text-[0.78rem] my-1">
            1. Complete captcha
          </p>
          <p className="text-sideBarLink font-normal text-[0.78rem] mb-1">
            1. Connect wallet
          </p>
          <p className="text-sideBarLink font-normal text-[0.78rem] mb-1">
            1. Social verification
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start">
          <img
            src="/assets/svg/image-quest.svg"
            alt=""
            className="w-[100%] max-w-[250px] h-[20vh] max-h-[150px] rounded-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Quest;
