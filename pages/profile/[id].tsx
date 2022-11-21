import { NextPage } from "next";
import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import DashboardLayout from "../../layout/dashboard";

const Profile: NextPage = () => {
  return (
    <DashboardLayout>
      <div className="w-[100%] h-[100vh] flex flex-col items-center justify-start bg-bgGrey1 box-border">
        <div className="relative w-[97%] h-[30%] max-h-[358px] bg-cover-image bg-no-repeat bg-center bg-cover  -mt-4">
          <img
            src="/assets/images/avatar12.jpg"
            alt="profilepic"
            className="absolute -bottom-[7.5vw] left-7 min-h-[150px] min-w-[150px] w-[15vw] h-[15vw] rounded-full border-[10px] border-bgGrey1"
          />
        </div>
        <div className="w-[97%] h-[14%] flex items-center justify-between box-border pl-[18vw]">
          <div className="w-[30%] h-[100%] flex flex-col items-start justify-center ">
            <span className="text-[2vw] text-white ">Vitalic Buterin</span>
            <span className="text-[1.3vw] text-textGray">@eth_is_better</span>
          </div>
          <div className="w-[50%] h-[100%] flex items-center justify-between">
            <div className="w-auto h-[100%] flex flex-col items-center justify-center">
              <span className="text-[1.5vw] text-white ">Konnektions</span>
              <span className="text-[1.3vw] text-textGray">100+</span>
            </div>
            <div className="w-auto h-[100%] flex flex-col items-center justify-center">
              <span className="text-[1.5vw] text-white ">Followers</span>
              <span className="text-[1.3vw] text-textGray">20</span>
            </div>
            <div className="w-auto h-[100%] flex flex-col items-center justify-center">
              <span className="text-[1.5vw] text-white ">Communities</span>
              <span className="text-[1.3vw] text-textGray">20+</span>
            </div>
          </div>
        </div>
        <div className="w-[97%] h-[25%] flex items-start justify-between px-[3vw] box-border">
          <div className=" w-[60%] h-[50%] flex flex-col items-start justify-start ">
            <p className="text-textGray text-[1.7vw] my-[3%]">
              Blockchain | LearnWeb3Dao | intern @BuildSpace | Code is law |
              web3 Developer | Building konnektr
            </p>
            <div className="w-[70%] h-[50%] flex  items-center justify-start cursor-pointer">
              <button className="text-white bg-gradient-to-r from-gradient1 to-gradient2 h-[40px] w-[30%] min-w-[150px] rounded-md">
                Konnekt
              </button>
              <div className="flex items-center justify-center h-[40px] w-[30%] min-w-[150px] p-[2px] box-border bg-gradient-to-r from-gradient1 to-gradient2 rounded-md mx-5 cursor-pointer">
                <div className="w-full h-full flex items-center justify-center text-white rounded-md  bg-bgGrey1">
                  <AiOutlineMessage size={23} className="mr-2" />
                  <span className="">Message</span>
                </div>
              </div>
              <BiShareAlt size={30} color="white" className="ml-3" />
            </div>
          </div>
          <div className="w-[40%] flex flex-col items-end justify-center">
            <div className="flex items-center justify-center h-[40px] w-[40%] min-w-[150px] p-[2px] box-border bg-gradient-to-r from-gradient1 to-gradient2 rounded-3xl my-[3%] cursor-pointer">
              <div className=" w-full h-full rounded-3xl text-white  text-[1rem] flex items-center justify-center bg-bgGrey1">
                Place in internet
              </div>
            </div>
            <div className="flex items-center justify-center h-[40px] w-[40%] min-w-[150px] p-[2px] box-border bg-gradient-to-r from-gradient1 to-gradient2 rounded-3xl cursor-pointer">
              <div className=" w-full h-full rounded-3xl text-white  text-[1rem] flex items-center justify-center bg-bgGrey1">
                wallet : 0x345od..
              </div>
            </div>
          </div>
        </div>
        <div className="self-start w-[60%] h-[15%] ml-[4vw] grid grid-cols-7 gap-x-3 my-2">
          <Tag name="GraphQL" />
          <Tag name="GraphQL" />
          <Tag name="GraphQL" />
          <Tag name="GraphQL" />
          <Tag name="GraphQL" />
          <Tag name="GraphQL" />
          <Tag name="GraphQL" />
          <Tag name="GraphQL" />
          <Tag name="GraphQL" />
          <Tag name="GraphQL" />
          <span className="pt-3 ml-2 text-white text-[1.1vw]">See more..</span>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;

type tag = {
  name: string;
};

function Tag({ name }: tag) {
  return (
    <div className="w-[100%] h-[35px] rounded-[100px] border-tagBorder border-[3px] flex items-center justify-center text-[1vw] text-tagText cursor-pointer">
      {name}
    </div>
  );
}
