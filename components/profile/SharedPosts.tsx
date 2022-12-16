import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { BsArrowDownUp, BsBookmark } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

type Post = {
  name: string;
  username: string;
  content?: string;
  image?: any;
};

function SharedPosts({ name, username, content, image }: Post) {
  return (
    <div className="self-start w-[99%] min-h-[185px] rounded-[30px] bg-bgCard flex flex-col items-center justify-start overflow-hidden my-2">
      <div className="w-full h-[10%] min-h-[50px] sm:min-h-[55px] flex items-end justify-between px-[5%] box-border">
        <div className="w-[40%] h-full flex items-end justify-start">
          <img
            src="/assets/images/image.png"
            alt="profilepic"
            className="w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full"
          />
          <h1 className="text-[0.9rem] sm:text-[1rem] font-bold text-sideBarLink mx-3">
            {name}
          </h1>
          <h1 className="text-[0.78rem] sm:text-[0.8rem] text-sideBarLink font-bold ">
            @{username}
          </h1>
        </div>
        <BsThreeDots className="text-sideBarLink" size={26} />
      </div>
      {content && (
        <p className="text-[0.8rem] font-normal text-sideBarLink max-w-[80%] text-justify mt-2">
          {content}
        </p>
      )}
      {image && (
        <img
          src={image}
          alt=""
          className="w-[80%] h-[30vh] sm:h-[60vh] object-fill rounded-[10px] my-2"
        />
      )}
      <div className="w-[80%] h-[10vh] flex items-center justify-between mt-2">
        <AiOutlineMessage className="text-sideBarLink" size={22} />
        <BsArrowDownUp className="text-arrow" size={22} />
        <FaRegHeart className="text-like" size={22} />
        <BsBookmark className="text-sideBarLink" size={22} />
      </div>
    </div>
  );
}

export default SharedPosts;
