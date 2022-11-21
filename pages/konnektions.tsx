import React, { useEffect, useState } from "react";
import {
  TextInput,
  Button,
  Select,
  MultiSelect,
  createStyles,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { FaChevronDown, FaSearch, FaTags, FaUser } from "react-icons/fa";
import { useAppStateContext } from "../context/contextProvider";
import UserCard from "../components/konnektions/UserCard";
import DashboardLayout from "../layout/dashboard";
import CustomDropDown from "../components/konnektions/CustomDropDown";

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

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      // alert(window.innerWidth);
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="w-[100%] h-[100%] bg-bgGrey1 flex flex-col items-center justify-start box-border pb-6 pt-3">
        <div className="flex items-center justify-start w-full h-[45px] pl-0 sm:pl-5 box-border">
          {searchBy === "Name" ? (
            <TextInput
              sx={{ color: "white" }}
              variant="unstyled"
              className="rounded-lg "
              placeholder="Search by name"
              classNames={{
                input:
                  "text-white w-[45vw] sm:w-[100%] min-w-[35vw] bg-bgGrey2 rounded-md pl-2 ",
              }}
            />
          ) : (
            <MultiSelect
              data={data}
              placeholder="Search by tags"
              rightSection={<></>}
              classNames={{
                input:
                  "w-[45vw] sm:w-[100%] min-w-[35vw] bg-bgGrey2 border-none rounded-md",
                dropdown: "bg-bgGrey2 border-none",
                item: "text-white hover:text-black",
              }}
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
          <Button
            variant="filled"
            className="w-[7vw] bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-tl-none rounded-bl-none hover:bg-selectBorder -ml-1 flex items-center justify-center"
          >
            <span className="hidden sm:block">Search</span>
            <FaSearch size={17} color="white" className="block sm:hidden" />
          </Button>
          {/* <div className="hidden sm:flex sm:mr-2 p-[1px] bg-gradient-to-r from-gradient1 to-gradient2">
            <Select
              className=""
              classNames={{
                dropdown:
                  "w-28 text-white bg-bgGrey2 hover:bg-bgGrey2 border-0",
                input:
                  "rounded-md bg-bgInput hover:bg-bgInput border-none ml-5 h-10 min-w-[120px] w-[10vw] text-white selected:bg-white",
                item: "text-white hover:text-black hover:bg-white my-1",
              }}
              placeholder="Search By"
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
              rightSection={<FaChevronDown size={14} color="white" />}
              data={[
                { value: "name", label: "Name" },
                { value: "tags", label: "Tags" },
              ]}
              onSearchChange={(value) => {
                setSearchBy(value);
              }}
              searchValue={searchBy.value}
            />
          </div> */}
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
          {/* <Select
            className="hidden lg:flex"
            classNames={{
              dropdown: "w-28 text-white bg-bgGrey2 hover:bg-bgGrey2 border-0",
              input:
                "rounded-md bg-bgInput hover:bg-bgInput border-2 border-selectBorder ml-5 h-10 min-w-[100px] w-[10vw] text-white selected:bg-white",
              item: "text-white hover:text-black hover:bg-white226FEE my-1",
            }}
            placeholder="work"
            styles={(theme) => ({
              rightSection: { pointerEvents: "none" },
              item: {
                // applies styles to selected item
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark" ? theme.white : theme.white,
                    color:
                      theme.colorScheme === "dark" ? theme.white : theme.black,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                "&[data-hovered]": {},
              },
            })}
            rightSection={<FaChevronDown size={14} color="white" />}
            data={[
              { value: "student", label: "Student" },
              { value: "experienced", label: "Experienced" },
              { value: "fresher", label: "Fresher" },
            ]}
            onSearchChange={(value) => {
              // setSearchBy(value);
            }}
            searchValue={searchBy.value}
          /> */}
          <div
            className="flex flex-col  items-center justify-center ml-[10px] min-w-[39px] mr-1 w-[8vw] h-[39px] rounded-lg bg-gradient-to-r from-gradient1 to-gradient2 sm:hidden p-[1px] box-border "
            onClick={() => {
              if (searchBy === "Name") {
                setSearchBy("Tags");
              } else {
                setSearchBy("Name");
              }
            }}
          >
            <div className="h-full w-full flex items-center justify-center rounded-lg bg-bgInput">
              {searchBy === "Name" ? (
                <FaTags color="white" size={16} />
              ) : (
                <FaUser color="white" size={16} />
              )}
            </div>
          </div>
          <CustomDropDown
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
          />
          {/* <Select
            className="block lg:hidden"
            classNames={{
              dropdown: "w-28 text-white bg-bgGrey2 hover:bg-bgGrey2 border-0",
              input:
                "rounded-md bg-bgInput hover:bg-bgInput border-2 border-selectBorder ml-5 h-10 min-w-[90px] w-[100%] text-white selected:bg-white",
              item: "text-white hover:text-black hover:bg-white226FEE my-1",
            }}
            placeholder="Filter "
            styles={(theme) => ({
              rightSection: { pointerEvents: "none" },
              wrapper: {
                width: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              },
              item: {
                // applies styles to selected item
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark" ? theme.white : theme.white,
                    color:
                      theme.colorScheme === "dark" ? theme.white : theme.black,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                "&[data-hovered]": {},
              },
            })}
            rightSection={<FaChevronDown size={14} color="white" />}
            data={[
              { value: "student", label: "Student" },
              { value: "experienced", label: "Experienced" },
              { value: "fresher", label: "Fresher" },
            ]}
            onSearchChange={(value) => {
              // setSearchBy(value);
            }}
            searchValue={searchBy.value}
          /> */}
          {/* <Select
            className="hidden sm:hidden lg:flex"
            classNames={{
              dropdown: "w-28 text-white bg-bgGrey2 hover:bg-bgGrey2 border-0",
              input:
                "rounded-xl bg-bgInput hover:bg-bgInput border-2 border-selectBorder ml-5 h-10 min-w-[120px] w-[10vw] text-white selected:bg-white",
              item: "text-white hover:text-black hover:bg-white my-1",
            }}
            placeholder="Experience"
            styles={(theme) => ({
              rightSection: { pointerEvents: "none" },
              item: {
                // applies styles to selected item
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark" ? theme.white : theme.white,
                    color:
                      theme.colorScheme === "dark" ? theme.white : theme.black,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                "&[data-hovered]": {},
              },
            })}
            rightSection={<FaChevronDown size={14} color="white" />}
            data={[
              { value: "1-2yr", label: "1-2 years" },
              { value: "2-3yr", label: "2-3 years" },
            ]}
            onSearchChange={(value) => {
              // setSearchBy(value);
            }}
            searchValue={searchBy.value}
          /> */}
        </div>
        <h1 className="text-[18px] ml-2 sm:ml-7 mt-0  sm:text-heading mb-1  text-white font-normal self-start sm:mt-2">
          Top Picks
        </h1>
        <div className="w-[100%] sm:w-[95%] lg:h-[40%]  flex overflow-x-scroll scrollbar-hide  box-border mt-0 sm:mt-2">
          {/* Carousel */}
          <Carousel
            className="h-full"
            slideGap="md"
            slideSize={width * 0.04}
            loop
            align="start"
            slidesToScroll={1}
            classNames={classes}
          >
            {Array(15)
              .fill(null)
              .map((_, index) => (
                <Carousel.Slide>
                  <UserCard
                    name="Shivraj"
                    description="Web3 Developer"
                    profileImageURL={`/assets/images/avatar1.jpg`}
                    isVerified={index % 3 == 0 ? true : false}
                  />
                </Carousel.Slide>
              ))}

            {/* ...other slides */}
          </Carousel>
        </div>
        <h1 className="text-[18px] ml-2 sm:ml-7 sm:text-heading my-1 text-white font-normal self-start mt-0 sm:mt-2">
          Users
        </h1>
        <div
          className={`w-[100%] sm:w-[95%] min-h-[35%] grid grid-cols-2 sm:grid-cols-3 gap-x-5 md:grid-cols-4 md850:grid-cols-5 ${
            sidebarToggleCollapse
              ? "lg1100:grid-cols-5 lg1200:grid-cols-5 lg1350:grid-cols-6"
              : "lg1100:grid-cols-4 lg1200:grid-cols-4 lg1350:grid-cols-5"
          } gap-y-5 lg:gap-y-10 scrollbar-hide box-border place-items-center lg:place-items-center mt-0 sm:mt-2`}
        >
          {Array(15)
            .fill(null)
            .map((_, index) => (
              <UserCard
                key={index}
                name="Shivraj"
                description="Web3 Developer"
                profileImageURL={`/assets/images/avatar8.jpg`}
                isVerified={index % 3 == 0 ? true : false}
              />
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default konnektions;
