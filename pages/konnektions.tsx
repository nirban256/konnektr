import React, { useEffect, useState } from "react";
import {
  TextInput,
  Button,
  Select,
  MultiSelect,
  createStyles,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { FaSearch, FaTags, FaUser } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useAppStateContext } from "../context/contextProvider";
import UserCard from "../components/konnektions/UserCard";
import DashboardLayout from "../layout/dashboard";
import CustomDropDown from "../components/konnektions/CustomDropDown";
import Header from "../components/profile/Header";
import { useRouter } from "next/router";

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },
}));

const konnektions = () => {
  const { classes } = useStyles();
  // @ts-ignore
  const {
    // @ts-ignore
    searchBy, // @ts-ignore
    setSearchBy,
    // @ts-ignore
    sidebarToggleCollapse,
    // @ts-ignore
    work, // @ts-ignore
    setWork, // @ts-ignore
    experience, // @ts-ignore
    setExperience,
  } = useAppStateContext();
  const [width, setWidth] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      // alert(window.innerWidth);
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="w-[100%] h-[100%] bg-bgMain flex flex-col items-center justify-start box-border pb-16 sm:pb-6 pt-0 sm:pt-3">
        <Header />
        <div className="flex items-center justify-between w-full h-[50px] pl-0 sm:pl-5  box-border">
          <div className="flex items-center justify-between sm:justify-start h-full w-full sm:w-[90%]">
            {searchBy === "Name" ? (
              <TextInput
                sx={{ color: "white" }}
                variant="unstyled"
                className="rounded-lg"
                placeholder="Search by name"
                rightSection={
                  <img
                    src="/assets/svg/documentfilter.svg"
                    className="flex sm:hidden h-[20px] w-[20px] mr-2"
                  />
                }
                icon={<FaSearch className="text-sideBarLink ml-4" size={22} />}
                classNames={{
                  input:
                    "text-white w-[90vw] sm:w-[35vw] h-[38px] sm:h-[50px] sm:w-[100%] min-w-[40vw] sm:min-w-[30vw] bg-bgSearchbar rounded-[30px] pl-[50px] ",
                }}
              />
            ) : (
              <MultiSelect
                data={data}
                placeholder="Search by tags"
                rightSection={
                  <img
                    src="/assets/svg/documentfilter.svg"
                    className="flex sm:hidden h-[20px] w-[20px] mr-2"
                  />
                }
                classNames={{
                  input:
                    "w-[90vw] sm:w-[35vw] sm:w-[100%] h-[38px] sm:h-[50px] min-w-[40vw] sm:min-w-[30vw] bg-bgSearchbar border-none rounded-[30px] pl-[50px] pt-2 box-border",
                  dropdown: "bg-gray-100 border-none scrollbar-hide",
                  item: "text-black hover:text-black bg-transparent w-full",
                }}
                icon={<FaSearch className="text-sideBarLink ml-4" size={22} />}
                styles={(theme) => ({
                  rightSection: { pointerEvents: "none" },
                  item: {
                    // applies styles to selected item
                    "&[data-selected]": {
                      "&, &:hover": {
                        backgroundColor:
                          theme.colorScheme === "dark"
                            ? theme.white
                            : theme.white,
                        color:
                          theme.colorScheme === "dark"
                            ? theme.white
                            : theme.black,
                      },
                    },

                    // applies styles to hovered item (with mouse or keyboard)
                    "&[data-hovered]": {},
                  },
                })}
              />
            )}
            <CustomDropDown
              className="hidden sm:flex"
              data={[
                { value: "name", label: "Name" },
                { value: "tags", label: "Tags" },
              ]}
              placeholder="SearchBy"
              onChangeFirst={(data) => {
                setSearchBy(data);
              }}
              currentValueforFirst={searchBy}
              onChangeSecond={undefined}
              onChangeThird={undefined}
            />
            <CustomDropDown
              className="hidden lg:flex"
              data={[
                { value: "student", label: "Student" },
                { value: "experienced", label: "Experienced" },
                { value: "fresher", label: "Fresher" },
              ]}
              placeholder="Work"
              onChangeFirst={(data) => {
                setWork(data);
              }}
              currentValueforFirst={work}
              onChangeSecond={undefined}
              onChangeThird={undefined}
            />
            <CustomDropDown
              className="hidden sm:hidden lg:flex"
              data={[
                { value: "1-2yr", label: "1-2 years" },
                { value: "2-3yr", label: "2-3 years" },
              ]}
              placeholder="Experience"
              onChangeFirst={(data) => {
                setExperience(data);
              }}
              currentValueforFirst={experience}
              onChangeSecond={undefined}
              onChangeThird={undefined}
            />
            {/* <div
              className=" ml-[0px] min-w-[39px] mr-1 w-[8vw] h-[39px] flex items-center justify-center rounded-lg bg-bgDropDown sm:hidden p-[1px] box-border "
              onClick={() => {
                if (searchBy === "Name") {
                  setSearchBy("Tags");
                } else {
                  setSearchBy("Name");
                }
              }}
            >
              {searchBy === "Name" ? (
                <FaTags className="text-sideBarLink" size={16} />
              ) : (
                <FaUser className="text-sideBarLink" size={16} />
              )}
            </div> */}
            {/* <CustomDropDown
              className="block lg:hidden  mx-[5px] min-w-[70px] max-w-[100px]"
              firstSectionTitle={"Work"}
              data={[
                { value: "student", label: "Student" },
                { value: "experienced", label: "Experienced" },
                { value: "fresher", label: "Fresher" },
              ]}
              placeholder="Filter"
              onChangeFirst={(data) => {
                setWork(data);
              }}
              secondSectionTitle={"Experience"}
              dataSecondSection={[
                { value: "1-2yr", label: "1-2 years" },
                { value: "2-3yr", label: "2-3 years" },
              ]}
              currentValueforFirst={work}
              currentValueforSecond={experience}
              mobile={true}
              onChangeSecond={(data: any) => {
                setExperience(data);
              }}
              onChangeThird={undefined}
            /> */}
          </div>
          <button
            onClick={() => router.push("/messages")}
            className="hidden  w-[11%] h-[50px] max-w-[120px] sm:flex items-center justify-center rounded-[30px] bg-bgDropDown ml-4"
          >
            <AiFillMessage size={22} className="" />
          </button>
        </div>
        {/* <h1 className="text-[18px] ml-2 sm:ml-7 mt-0  sm:text-heading mb-1  text-white font-normal self-start sm:mt-2">
          Top Picks
        </h1>
        <div
          className={`w-[100%] sm:w-[95%] lg:h-[40%]  flex overflow-x-scroll scrollbar-hide  box-border mt-0 sm:mt-2`}
        >
          <Carousel
            className="h-full"
            slideGap="md"
            slideSize={width * 0.02}
            loop
            align="start"
            slidesToScroll={1}
            classNames={classes}
          >
            {Array(30)
              .fill(null)
              .map((_, index) => (
                <Carousel.Slide>
                  <UserCard
                    name="Shivraj"
                    description="Web3 Developer"
                    profileImageURL={`/assets/images/avatar8.jpg`}
                    isVerified={index % 3 == 0 ? true : false}
                  />
                </Carousel.Slide>
              ))}

          </Carousel>
        </div> */}

        <div
          className={`w-[100%] sm:w-[95%] min-h-[35%] grid grid-cols-2 sm:mt-20 sm:grid-cols-3 gap-x-5 md:grid-cols-3 md850:grid-cols-4 ${
            sidebarToggleCollapse
              ? "lg1100:grid-cols-4 lg1200:grid-cols-5 lg1350:grid-cols-5"
              : "lg1100:grid-cols-3 lg1200:grid-cols-4 lg1350:grid-cols-4"
          } gap-y-5 lg:gap-y-10 scrollbar-hide box-border place-items-center lg:place-items-center mt-4 sm:mt-2`}
        >
          {Array(15)
            .fill(null)
            .map((_, index) => (
              <UserCard
                key={index}
                name="Shivraj"
                description="Web3 Developer"
                profileImageURL={`/assets/images/avatar12.jpg`}
                isVerified={index % 3 == 0 ? true : false}
              />
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default konnektions;
