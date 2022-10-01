import React, { useEffect } from "react";
import {
  TextInput,
  Button,
  Select,
  MultiSelect,
  createStyles,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import UserCard from "../components/konnektions/UserCard";
import { FaChevronDown, FaSearch, FaTags, FaUser } from "react-icons/fa";
import { useAppStateContext } from "../context/contextProvider";

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
  const { searchBy, setSearchBy } = useAppStateContext();

  return (
    <div className="w-full min-h-[100vh] bg-black flex flex-col items-center justify-start">
      <div className="w-[100%] h-[100%] bg-transparent flex flex-col items-center pl-1 sm:pl-[3%] pr-1 sm:pr-1 box-border pb-6">
        <h1 className="text-[7vw] sm:text-heading my-[1%] text-white font-extrabold self-start">
          Konnektions
        </h1>
        <div className="flex items-start justify-start w-full h-[45px] ">
          {searchBy === "Name" ? (
            <TextInput
              sx={{ color: "white" }}
              variant="unstyled"
              className="w-[55vw] sm:w-[40vw] text-white bg-bgInput rounded-md pl-3 box-border"
              placeholder="Search by name"
              classNames={{ input: "text-white" }}
            />
          ) : (
            <MultiSelect
              data={data}
              placeholder="Search by tags"
              rightSection={<></>}
              classNames={{
                input:
                  "w-[50vw] sm:w-[40vw] text-white bg-bgInput rounded-md pl-3 box-border border-0 selected:text-black",
                dropdown:
                  "w-28 text-white bg-bgInput hover:bg-bgInput border-0",
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
            className="w-[7vw]  bg-selectBorder text-white rounded-tl-none rounded-bl-none hover:bg-selectBorder -ml-1 flex items-center justify-center"
          >
            <span className="hidden sm:block">Search</span>
            <FaSearch size={17} color="white" className="block sm:hidden" />
          </Button>
          <Select
            className="hidden sm:flex sm:mr-2"
            classNames={{
              dropdown: "w-28 text-white bg-bgInput hover:bg-bgInput border-0",
              input:
                "rounded-xl bg-bgInput hover:bg-bgInput border-2 border-selectBorder ml-5 h-10 min-w-[120px] w-[10vw] text-white selected:bg-white",
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
              { value: "name", label: "Name" },
              { value: "tags", label: "Tags" },
            ]}
            onSearchChange={(value) => {
              setSearchBy(value);
            }}
            searchValue={searchBy.value}
          />
          <Select
            className="hidden lg:flex"
            classNames={{
              dropdown: "w-28 text-white bg-bgInput hover:bg-bgInput border-0",
              input:
                "rounded-xl bg-bgInput hover:bg-bgInput border-2 border-selectBorder ml-5 h-10 min-w-[100px] w-[10vw] text-white selected:bg-white",
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
          />
          <div
            className="flex flex-col  items-center justify-center ml-[5px] min-w-[39px] mr-1 w-[8vw] h-[39px] rounded-xl bg-bgInput  border-2 border-selectBorder sm:hidden"
            onClick={() => {
              if (searchBy === "Name") {
                setSearchBy("Tags");
              } else {
                setSearchBy("Name");
              }
            }}
          >
            {searchBy === "Name" ? (
              <FaTags color="white" />
            ) : (
              <FaUser color="white" />
            )}
          </div>
          <Select
            className="block lg:hidden"
            classNames={{
              dropdown: "w-28 text-white bg-bgInput hover:bg-bgInput border-0",
              input:
                "rounded-xl bg-bgInput hover:bg-bgInput border-2 border-selectBorder ml-5 h-10 min-w-[90px] w-[100%] text-white selected:bg-white",
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
          />
          <Select
            className="hidden sm:hidden lg:flex"
            classNames={{
              dropdown: "w-28 text-white bg-bgInput hover:bg-bgInput border-0",
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
          />
        </div>
        <h1 className="text-[18px] ml-2 sm:ml-0 sm:text-heading mb-1  text-white font-normal self-start">
          Top Picks
        </h1>
        <div className="w-[100%] h-52 min-h-[40vh] flex overflow-x-scroll gap-x-7 scrollbar-hide px-[10px] box-border">
          {/* Carousel */}
          <Carousel
            className="h-full"
            slideGap="md"
            slideSize="10%"
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
                    profileImageURL={`/assets/images/avatar${index + 1}.jpg`}
                    isVerified={index % 3 == 0 ? true : false}
                  />
                </Carousel.Slide>
              ))}

            {/* ...other slides */}
          </Carousel>
        </div>
        <h1 className="text-[18px] ml-2 sm:ml-0 sm:text-heading my-1 text-white font-normal self-start">
          Users
        </h1>
        <div className="w-[100%] min-h-[35%] grid grid-cols-2 sm500:grid-cols-3 sm750:grid-cols-4 md1050:grid-cols-5 lg1200:grid-cols-6 xl1400:grid-cols-7 place-items-center  gap-y-10 scrollbar-hide">
          {Array(15)
            .fill(null)
            .map((_, index) => (
              <UserCard
                key={index}
                name="Shivraj"
                description="Web3 Developer"
                profileImageURL={`/assets/images/avatar${index + 1}.jpg`}
                isVerified={index % 3 == 0 ? true : false}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default konnektions;
