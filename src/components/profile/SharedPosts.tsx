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
  onAvatarClick?: () => void;
  onRetweet?: () => void;
  onRetweetNumberClick?: () => void;
  onLike?: () => void;
  onLikeNumberClick?: () => void;
  onCommentButtonClick?: () => void;
  onSaveButtonClick?: () => void;
  onOptionButtonClick?: () => void;
  onImageClick?: () => void;
  onClick?: () => void;
};

const SharedPosts = ({
  name,
  username,
  content,
  image,
  onAvatarClick,
  onCommentButtonClick,
  onLike,
  onLikeNumberClick,
  onRetweet,
  onRetweetNumberClick,
  onSaveButtonClick,
  onOptionButtonClick,
  onClick,
  onImageClick,
}: Post) => {
  return (
    <div className="self-start w-[99%] min-h-[185px] rounded-[30px] pt-2.5 bg-bgCard flex flex-col items-center justify-between overflow-hidden mb-3 cursor-pointer">
      <div className="w-full h-[10%] min-h-[50px] sm:min-h-[55px] flex items-center justify-between px-[5%] box-border">
        <div className="w-[40%] h-full flex items-center justify-start">
          <img
            onClick={onAvatarClick}
            src="/assets/images/image.png"
            alt="profilepic"
            className="w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full"
          />
          <div className="flex flex-col items-start justify-evenly ml-2 mt-2">
            <h1 className="text-[0.9rem] sm:text-[1rem] font-bold text-sideBarLink ">
              {name}
            </h1>
            <div className="w-full flex items-center justify-start">
              <h1 className="text-[0.78rem] sm:text-[0.8rem] text-transparent  bg-clip-text bg-gradient-to-tr from-text_gradient1 to-text_gradient2 font-medium mt-1 mr-2">
                @{username}
              </h1>
              <h1 className="text-[0.78rem] sm:text-[0.8rem] text-sideBarLink font-light ">
                1hr
              </h1>
            </div>
          </div>
        </div>
        <BsThreeDots
          className="text-sideBarLink mr-7"
          size={26}
          onClick={onOptionButtonClick}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start box-border px-[10%] my-1">
        {content && (
          <p
            onClick={onClick}
            className=" text-[0.8rem] font-normal text-sideBarLink text-justify"
          >
            {content}
          </p>
        )}
        {image && (
          <img
            onClick={onImageClick}
            src={image}
            alt=""
            className=" w-full h-[30vh] sm:h-[60vh] object-cover rounded-[10px] my-2 max-h-[270px]"
          />
        )}
      </div>
      <div className="self-start w-[75%] sm:w-[60%] h-[10vh] flex items-center justify-between mt-2 max-h-[70px] px-[10%]">
        <div className="flex items-center justify-start gap-x-1">
          <BsArrowDownUp className="text-arrow" size={18} onClick={onRetweet} />
          <h1
            className="text-arrow text-[0.8rem]"
            onClick={onRetweetNumberClick}
          >
            100
          </h1>
        </div>
        <div className="flex items-center justify-start gap-x-1">
          <FaRegHeart className="text-like" size={18} onClick={onLike} />
          <h1 className="text-like text-[0.8rem]" onClick={onLikeNumberClick}>
            100
          </h1>
        </div>
        <div
          className="flex items-center justify-start gap-x-1 "
          onClick={onCommentButtonClick}
        >
          <AiOutlineMessage className="text-blue-500" size={18} />
          <h1 className="text-blue-500 text-[0.8rem]">100</h1>
        </div>
        <div
          className="flex items-center justify-start gap-x-1 "
          onClick={onSaveButtonClick}
        >
          <BsBookmark className="text-sideBarLink" size={18} />
        </div>
      </div>
    </div>
  );
};

export default SharedPosts;
