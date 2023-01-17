import React from "react";
import { FaPlus } from "react-icons/fa";

type props = {
  closeButtonClick: () => void;
  isLoggedIn: boolean;
  onSubmit?: () => void;
  onSignIn?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onGalleryClicked?: () => void;
  onVideoButtonClicked?: () => void;
  onCalendarClicked?: () => void;
  onGiftButtonClicked?: () => void;
  onBold?: () => void;
  onItalic?: () => void;
  onUnderline?: () => void;
};

const PostModal = ({
  closeButtonClick,
  isLoggedIn,
  onSubmit,
  onSignIn,
  onChange,
  onGalleryClicked,
  onCalendarClicked,
  onGiftButtonClicked,
  onVideoButtonClicked,
  onBold,
  onItalic,
  onUnderline,
}: props) => {
  return (
    <div className="fixed z-[100] w-screen h-screen backdrop-blur-[7.5px] bg-blurBg top-0 flex flex-col items-center justify-center lg:justify-center">
      {isLoggedIn ? (
        <div className="relative w-[95%]  lg:w-[50%] h-[90%] lg:h-[30%] lg:min-h-[220px]  lg:max-h-[230px] max-w-[650px] bg-bgCover lg:bg-white rounded-[15px] flex flex-col items-center justify-start overflow-hidden border-[3px] border-borderModal ">
          <div className="w-full h-[50px] border-b-[1px] border-b-line flex items-center justify-between px-5 box-border">
            <h1 className="text-[0.9rem] font-extrabold text-sideBarLink">
              Create Post
            </h1>
            <div
              onClick={closeButtonClick}
              className="w-[24px] h-[24px] rounded-full  flex items-center justify-center"
            >
              <FaPlus className="text-gray-600 rotate-45" size={14} />
            </div>
          </div>
          <div className="w-full h-[90%] lg:h-[130px] flex flex-col items-start justify-center">
            <div className="w-full h-[50px] flex items-center justify-start gap-x-3 border-none sm:border-b-[1px] border-b-line pl-2">
              <img
                onClick={onBold}
                src="/assets/svg/textbold.svg"
                alt=""
                className="w-[20px] h-[20px] "
              />
              <img
                onClick={onItalic}
                src="/assets/svg/textitalic.svg"
                alt=""
                className="w-[20px] h-[20px] "
              />
              <img
                onClick={onUnderline}
                src="/assets/svg/textunderline.svg"
                alt=""
                className="w-[20px] h-[20px] "
              />
            </div>
            <textarea
              onChange={onChange}
              rows={5}
              autoFocus={false}
              style={{ resize: "none" }}
              className="w-full h-[90%]  text-black placeholder:text-gray-400 placeholder:font-light placeholder:text-[0.9rem] bg-transparent  overflow-auto scrollbar-hide focus:outline-none pl-4 box-border pt-[1%]"
              placeholder="What's happening?"
            ></textarea>
          </div>
          <div className="w-full h-[50px] flex items-center justify-between px-5 box-border">
            <div className="w-[40%] lg:w-[25%] h-full flex items-center justify-between">
              <img
                onClick={onGalleryClicked}
                src="/assets/svg/gallery.svg"
                alt=""
                className="w-[20px] h-[20px] "
              />
              <img
                onClick={onVideoButtonClicked}
                src="/assets/svg/videocircle.svg"
                alt=""
                className="w-[22px] h-[22px] "
              />
              <img
                onClick={onCalendarClicked}
                src="/assets/svg/calendaredit.svg"
                alt=""
                className="w-[20px] h-[20px] "
              />
              <img
                onClick={onGiftButtonClicked}
                src="/assets/svg/gift.svg"
                alt=""
                className="w-[20px] h-[20px] "
              />
            </div>
            <button
              onClick={onSubmit}
              className="w-[90px] h-[33px] rounded-[30px] flex items-center justify-evenly bg-gradient-to-r from-text_gradient1 to-text_gradient2  "
            >
              <img
                src="/assets/svg/magicpenwhite.svg"
                alt=""
                className="w-[22px] h-[22px]"
              />
              <h1 className="text-[0.9rem] text-white font-semibold mr-3 ">
                Post
              </h1>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-[95%]  lg:w-[50%] h-[30%] lg:h-[30%] lg:min-h-[220px]  lg:max-h-[230px] max-w-[650px] bg-bgCover lg:bg-white rounded-[15px] flex flex-col items-center justify-start overflow-hidden border-[3px] border-borderModal ">
          <div className="w-full h-[50px] border-b-[1px] border-b-line flex items-center justify-between px-5 box-border">
            <div className="flex items-center justify-start gap-x-2">
              <img src="/assets/svg/dent.svg" alt="" className="" />
              <h1 className="text-[1.4rem] font-extrabold text-sideBarLink">
                Please Login
              </h1>
            </div>
            <div
              onClick={closeButtonClick}
              className="w-[24px] h-[24px] rounded-full  flex items-center justify-center cursor-pointer"
            >
              <FaPlus className="text-gray-600 rotate-45" size={14} />
            </div>
          </div>
          <div className="w-full h-[70%] lg:h-[150px] flex flex-col items-start justify-between pl-5 pt-12 box-border">
            <div className="font_exo2 text-sideBarLink font-bold text-[0.95rem]">
              Konnektr{" "}
              <span className="font-poppins font-light">
                gives you another level of web3 experience
              </span>
            </div>
            <button
              onClick={onSignIn}
              className="w-[180px] h-[33px] rounded-[30px] flex items-center justify-evenly bg-gradient-to-r from-text_gradient1 to-text_gradient2  "
            >
              <img
                src="/assets/svg/lens-white.svg"
                alt=""
                className="w-[40px] h-[40px]"
              />
              <h1 className="text-[0.9rem] text-white font-semibold mr-3 ">
                Signin with Lens
              </h1>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostModal;
