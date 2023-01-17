import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsArrowDownUp, BsBookmark, BsThreeDots } from "react-icons/bs";
import { FaPlus, FaRegHeart, FaSearch } from "react-icons/fa";
import PostModal from "../../components/home/PostModal";
import SearchItem from "../../components/home/SearchItem";
import TrendingQuestItem from "../../components/home/TrendingQuestItem";
import Comment from "../../components/posts/Comment";
import Header from "../../components/profile/Header";
import SharedPosts from "../../components/profile/SharedPosts";
import { useAppStateContext } from "../../context/contextProvider";
import DashboardLayout from "../../layout/dashboard";

const Post = () => {
  const {
    // @ts-ignore
    sidebarToggleCollapse,
  } = useAppStateContext();
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isloggedIn, setIsloggedIn] = useState<boolean>(false);
  const [isAlphamodalActive, setisAlphamodalActive] = useState<boolean>(true);

  // useEffect(() => {
  //   if (window) {
  //     alert(window.innerWidth);
  //   }
  // }, []);

  return (
    <DashboardLayout>
      <div className="w-[100%] lg1300:w-[100%]  h-[100vh] flex flex-col sm:flex-row items-start justify-between bg-white pb-16  sm:pb-0 box-border overflow-hidden">
        <div className="h-full w-full flex flex-col items-center justify-start overflow-y-scroll scrollbar-hide px-2 lg:px-0 box-border pt-3">
          <Header logoShown />
          {isAlphamodalActive && (
            <div className="relative w-[100%] lg:w-full min-h-[85px] lg:min-h-[60px] flex flex-col items-start justify-center border-[1px] border-goldBorder bg-goldBg rounded-[10px] mt-2 mb-3 px-[4%]  box-border">
              <FaPlus
                onClick={() => setisAlphamodalActive(false)}
                className="absolute top-2 right-2 text-goldText rotate-45"
                size={12}
              />
              <h1 className=" text-goldText font-extrabold text-[0.8rem] ">
                Alpha warning!
              </h1>
              <p className="text-[0.75rem] text-goldText font-light">
                Alpha warning ! Konnektr is still in the alpha phase,things may
                break,please handle us with care.
              </p>
            </div>
          )}
          <div className="w-[99%] sticky h-auto sm:min-h-[50px] max-h-[128px] rounded-[25px] bg-bgCard flex flex-col items-center justify-evenly sm:justify-between py-2 sm:py-0 box-border mb-3">
            <div
              onClick={() => setIsModalVisible(true)}
              className="w-[95%] sm:w-full h-[40px] sm:h-[50px] rounded-[30px] bg-bgCard flex items-center justify-start"
            >
              {/* <FaSearch className="text-sideBarLink ml-4" size={20} /> */}
              <img
                src="/assets/svg/magicpen.svg"
                alt=""
                className="w-[25px] h-[25px] ml-5 mr-2"
              />
              <input
                placeholder="What's up"
                onFocus={() => setIsModalVisible(true)}
                type="text"
                className="h-[40px] sm:h-[50px] bg-transparent placeholder:text-sideBarLink placeholder:text-[1rem] placeholder:font-bold focus:border-none focus:outline-none pl-3 text-black text-[1rem]"
              />
            </div>
          </div>

          {/*------------------ POST SECTION ------------------------------- */}

          <div className="relative w-full min-h-full flex flex-col items-center justify-start bg-bgCard rounded-[30px] overflow-y-scroll scrollbar-hide ">
            <div className="w-full h-[10%] min-h-[50px] sm:min-h-[55px] flex items-center justify-between px-5 box-border">
              <div className="w-[40%] h-full flex items-center justify-start">
                <img
                  src="/assets/images/image.png"
                  alt="profilepic"
                  className="w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full"
                />
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
              <BsThreeDots className="text-sideBarLink mr-7" size={26} />
            </div>
            <div className="w-full flex flex-col items-start justify-start box-border px-[10%] my-1">
              <p className=" text-[0.8rem] font-normal text-sideBarLink text-justify">
                Hello guys, this is my peraonal portfolio website, i creating
                with html css and javascript. demo at , thank u . #webdev
              </p>

              <img
                src={"/assets/images/punk.png"}
                alt=""
                className=" w-full h-[30vh] sm:h-[60vh] object-cover rounded-[10px] my-2 max-h-[270px]"
              />
            </div>
            <div className="self-start w-[75%] sm:w-[60%] h-[10vh] flex items-center justify-between mt-2 max-h-[70px] px-[10%] mb-3">
              <div className="flex items-center justify-start gap-x-1">
                <BsArrowDownUp
                  className="text-arrow cursor-pointer"
                  size={18}
                />
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
              <div className="flex items-center justify-start gap-x-1 cursor-pointer">
                <BsBookmark
                  className="text-sideBarLink cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            {/* ------------------ COMMENTS ---------------------------- */}

            <div className="self-end w-[90%] h-auto  bg-transparent  flex flex-col items-center justify-start pr-[5%]">
              <Comment />
              <Comment />
              <Comment />
            </div>

            {/* ------------------ COMMENTS ---------------------------- */}

            <div className="self-end w-[95%] lg:w-[70%] min-h-[100px] rounded-[15px] bg-white border-[1px] border-line overflow-hidden flex flex-col items-center justify-start mr-0 lg:mr-[5%] mb-2">
              <div className="w-full h-[30px] flex items-center justify-start pl-3 gap-x-2 box-border">
                <img
                  src="/assets/svg/textbold.svg"
                  alt=""
                  className="w-[15px] h-[15px] cursor-pointer"
                />
                <img
                  src="/assets/svg/textitalic.svg"
                  alt=""
                  className="w-[15px] h-[15px] cursor-pointer"
                />
                <img
                  src="/assets/svg/textunderline.svg"
                  alt=""
                  className="w-[15px] h-[15px] cursor-pointer"
                />
              </div>
              <textarea
                rows={5}
                autoFocus={false}
                style={{ resize: "none" }}
                className="w-full h-[50px]   text-black placeholder:text-gray-400 placeholder:font-light placeholder:text-[0.9rem] bg-transparent  overflow-auto scrollbar-hide focus:outline-none pl-4 box-border pt-[1%]"
                placeholder="Write your thoughts.."
              ></textarea>
              <div className="w-full h-[30px] flex items-center justify-between px-2 box-border">
                <div className="w-[50%] h-full  bg-transparent flex items-center justify-start pl-1 gap-x-2 box-border">
                  <img
                    src="/assets/svg/gallery.svg"
                    alt=""
                    className="w-[15px] h-[15px] cursor-pointer "
                  />
                  <img
                    src="/assets/svg/videocircle.svg"
                    alt=""
                    className="w-[18px] h-[18px] cursor-pointer"
                  />
                  <img
                    src="/assets/svg/calendaredit.svg"
                    alt=""
                    className="w-[15px] h-[15px] cursor-pointer"
                  />
                  <img
                    src="/assets/svg/gift.svg"
                    alt=""
                    className="w-[15px] h-[15px] cursor-pointer"
                  />
                </div>
                <button className="w-[90px] h-[25px] rounded-[30px] flex items-center justify-evenly bg-gradient-to-r from-text_gradient1 to-text_gradient2 text-[0.9rem] text-white font-bold mb-2 ">
                  comment
                </button>
              </div>
            </div>
          </div>

          {/* ----------------------- POST SECTION ------------------------- */}
        </div>
        <section className=" hidden h-full w-[35%] min-w-[350px] lg:flex flex-col items-center justify-start ml-2 py-2 lg1100:mr-[1%] lg1200:mr-[1%] lg1300:mr-[2%] xl1400:mr-[10%] xl1500:mr-[16%] ">
          <div
            className={`w-full h-[10%] flex items-center ${
              isloggedIn ? "justify-between" : "justify-end pr-6"
            }`}
          >
            {isloggedIn && (
              <div
                className={`w-[70%] ${
                  sidebarToggleCollapse ? "min-w-[200px]" : "min-w-[180px]"
                } h-[50px] rounded-[30px] flex items-center justify-start bg-bgDropDown text-black pl-6 box-border   oveflow-hidden  duration-500`}
              >
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[85%] h-full text-black pl-3 bg-transparent placeholder:text-sideBarLink placeholder:font-bold focus:outline-none"
                />
              </div>
            )}
            {isloggedIn ? (
              <button className="w-[90px] h-[45px] rounded-[30px] flex items-center justify-evenly bg-gradient-to-r from-text_gradient1 to-text_gradient2  ">
                <img
                  src="/assets/svg/lens-white.svg"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
              </button>
            ) : (
              <button className="w-[120px] h-[45px] rounded-[30px] flex items-center justify-evenly bg-gradient-to-r from-text_gradient1 to-text_gradient2  ">
                <img
                  src="/assets/svg/lens-white.svg"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-[1rem] text-white font-semibold mr-3 ">
                  Login
                </h1>
              </button>
            )}
          </div>
          <div className="mt-3 w-full h-[70%] bg-bgDropDown rounded-[30px] flex flex-col items-center overflow-y-scroll scrollbar-hide justify-start relative">
            <h1 className="self-start px-4 flex items-start justify-start bg-bgDropDown w-full text-center text-communityheading text-[1.35rem] font-bold pt-2 mb-2 sticky top-0">
              Trending Quests
            </h1>
            {/* <div className="flex flex-col items-center justify-start w-full  "> */}
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"completed"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"open"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            {/* </div> */}
          </div>
          {/* <div className="w-full h-[70px] rounded-[20px] bg-bgCover flex items-center justify-between px-5 box-border my-2">
            <div className="w-[50%] h-full flex items-center justify-start">
              <img
                src="/assets/images/image.png"
                alt=""
                className="w-[38px] h-[50px] rounded-t-full rounded-b-full object-cover"
              />
              <h1 className="text-[1rem] text-sideBarLink font-bold ml-4 ">
                Messages
              </h1>
            </div>
            <img
              src="/assets/svg/newmsg.svg"
              alt=""
              className="w-[24px] h-[24px] "
            />
          </div> */}
        </section>
      </div>
      {isModalVisible && (
        <PostModal
          closeButtonClick={() => setIsModalVisible(false)}
          isLoggedIn={isloggedIn}
        />
      )}
    </DashboardLayout>
  );
};

export default Post;
