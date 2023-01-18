import Image from "next/image";
import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsArrowDownUp, BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Comment = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start my-2 ">
      <div className="w-full min-h-[40px] h-[10%] flex items-center justify-start gap-x-2 ">
        <Image
          src={"/assets/images/image.png"}
          alt="profilepic"
          height={30}
          width={30}
          className="w-[30px] min-w-[30px] min-h-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full"
        />
        <div className="flex flex-col items-start justify-evenly  mt-2">
          <h1 className="text-[0.9rem] sm:text-[1rem] font-bold text-sideBarLink ">
            Shivraj
          </h1>
          <div className="w-full flex items-center justify-start">
            <h1 className="text-[0.78rem] sm:text-[0.8rem] text-transparent  bg-clip-text bg-gradient-to-tr from-text_gradient1 to-text_gradient2 font-medium mt-1 mr-2">
              @kewcoder
            </h1>
            <h1 className="text-[0.78rem] sm:text-[0.8rem] text-sideBarLink font-light ">
              1hr
            </h1>
          </div>
        </div>
      </div>
      <div className="h-auto min-h-[30%] w-full flex items-center justify-between px-5 gap-x-5">
        <div className="w-[2px] h-[70%]  bg-gray-400 -mt-5 lg:-mt-3"></div>
        <div className="w-full h-full flex flex-col items-start justify-start box-border  my-1 pt-4">
          <p className=" text-[0.8rem] font-normal text-sideBarLink text-justify">
            Hello guys, this is my peraonal portfolio website, i creating with
            html css and javascript. demo at , thank u . #webdev
          </p>
          {/* <img
            src={"/assets/images/punk.png"}
            alt=""
            className=" w-[50%]  object-cover rounded-[10px] my-2 max-h-[270px]"
          /> */}
          <div className="self-start w-[75%] sm:w-[40%] h-[10vh] flex items-center justify-between mt-2 max-h-[70px] ">
            <div className="flex items-center justify-start gap-x-1">
              <BsArrowDownUp className="text-arrow cursor-pointer" size={18} />
              <h1 className="text-arrow text-[0.8rem] cursor-pointer">100</h1>
            </div>
            <div className="flex items-center justify-start gap-x-1">
              <FaRegHeart className="text-like cursor-pointer" size={18} />
              <h1 className="text-like text-[0.8rem] cursor-pointer">100</h1>
            </div>
            <div className="flex items-center justify-start gap-x-1 ">
              <AiOutlineMessage className="text-blue-500" size={18} />
              <h1 className="text-blue-500 text-[0.8rem]">100</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[10%] min-h-[50px] sm:min-h-[55px] flex items-center justify-start lg:justify-between px-0 lg:px-5 box-border">
        <div className="w-[40%] h-full flex items-center justify-start">
          <div className="flex flex-col items-center justify-start h-full">
            <img
              src="/assets/images/image.png"
              alt="profilepic"
              className="w-[30px] min-w-[30px] min-h-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full"
            />
            <div className="w-[2px] h- mt-4 bg-gray-400"></div>
          </div>
          <div className="flex flex-col items-start justify-evenly ml-2 mt-2">
            <h1 className="text-[0.9rem] sm:text-[1rem] font-bold text-sideBarLink ">
              Shivraj
            </h1>
            <div className="w-full flex items-center justify-start">
              <h1 className="text-[0.78rem] sm:text-[0.8rem] text-transparent  bg-clip-text bg-gradient-to-tr from-text_gradient1 to-text_gradient2 font-medium mt-1 mr-2">
                @kewcoder
              </h1>
              <h1 className="text-[0.78rem] sm:text-[0.8rem] text-sideBarLink font-light ">
                1hr
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start box-border px-[10%] my-1">
        <p className=" text-[0.8rem] font-normal text-sideBarLink text-justify">
          Hello guys, this is my peraonal portfolio website, i creating with
          html css and javascript. demo at , thank u . #webdev
        </p>

        <img
          src={"/assets/images/punk.png"}
          alt=""
          className=" w-full h-[30vh] sm:h-[60vh] object-cover rounded-[10px] my-2 max-h-[270px]"
        />
      </div>
      <div className="self-start w-[75%] sm:w-[60%] h-[10vh] flex items-center justify-between mt-2 max-h-[70px] px-[10%]">
        <div className="flex items-center justify-start gap-x-1">
          <BsArrowDownUp className="text-arrow cursor-pointer" size={18} />
          <h1 className="text-arrow text-[0.8rem] cursor-pointer">100</h1>
        </div>
        <div className="flex items-center justify-start gap-x-1">
          <FaRegHeart className="text-like cursor-pointer" size={18} />
          <h1 className="text-like text-[0.8rem] cursor-pointer">100</h1>
        </div>
        <div className="flex items-center justify-start gap-x-1 ">
          <AiOutlineMessage className="text-blue-500" size={18} />
          <h1 className="text-blue-500 text-[0.8rem]">100</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Comment;
