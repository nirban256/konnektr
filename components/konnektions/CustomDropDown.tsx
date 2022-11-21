import React, { useState } from "react";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./DropDown.module.css";

type Data = {
  value: String;
  label: String;
};

type props = {
  placeholder: String;
  data: Data[];
  onChangeFirst: (data: String) => void;
  onChangeSecond: any | ((data: String) => void);
  onChangeThird: any | ((data: String) => void);
  currentValueforFirst?: String;
  currentValueforSecond?: String;
  currentValueforThird?: String;
  className?: String;
  firstSectionTitle?: String;
  secondSectionTitle?: String;
  thirdSectionTitle?: String;
  dataSecondSection?: Data[];
  dataThirdSection?: Data[];
  mobile?: boolean;
};

const CustomDropDown = ({
  data,
  placeholder,
  onChangeFirst,
  onChangeSecond,
  onChangeThird,
  currentValueforFirst,
  currentValueforSecond,
  currentValueforThird,
  className,
  dataSecondSection,
  dataThirdSection,
  firstSectionTitle,
  secondSectionTitle,
  thirdSectionTitle,
  mobile = false,
}: props) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<String>(placeholder);

  return (
    <div
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className={`${className} relative w-[13%] min-w-[100px] max-w-[150px] h-auto min-h-[40px] flex flex-col items-center justify-start p-[2px] box-border rounded-[10px] mx-3 cursor-pointer`}
    >
      <div className=" absolute w-full h-[38px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-gradient1 to-gradient2 p-[2px] box-border">
        <div className="w-[100%] h-[100%] bg-bgGrey2 rounded-[9px] flex items-center justify-between px-[7%] box-border ">
          <h1 className="text-white text-[0.8rem] font-light">{title}</h1>
          {dropdownOpen ? (
            <FaChevronUp color="white" size={17} />
          ) : (
            <FaChevronDown color="white" size={17} />
          )}
        </div>
      </div>
      {dropdownOpen && (
        <div
          className={` absolute z-[100] ${
            mobile ? "right-2" : ""
          } w-[100%] min-w-[140px] max-w-[150px] top-4 h-auto  bg-bgGrey2 mt-10 rounded-md border-[1px]  flex flex-col items-center justify-start border-line pt-1 box-border`}
        >
          <div
            className={`${styles.dropdownArrow} bg-line self-start ${
              mobile
                ? "right-[10px] before:right-[1px]"
                : "left-[10px] before:left-[1px]"
            }`}
          ></div>
          {firstSectionTitle && (
            <h1 className="self-start ml-[5%] text-white text-[1.1rem] font-medium underline">
              {firstSectionTitle}
            </h1>
          )}
          {data.map((item, index) => (
            <div
              onClick={() => {
                onChangeFirst(item.label);
                if (!mobile) {
                  setTitle(item.label);
                } else {
                  return;
                }
              }}
              key={index}
              className={`w-full h-[25px] ${"border-b-[1px]"} border-b-line flex items-center justify-between px-[5%] box-border pl-2 box-border${
                index === 0 ? "rounded-t-md" : ""
              }  `}
            >
              <h1 className="text-white text-[1rem]">{item.label}</h1>
              {currentValueforFirst === item.label && (
                <FaCheckCircle className="text-green-600" size={15} />
              )}
            </div>
          ))}
          {secondSectionTitle && (
            <h1 className="self-start ml-[5%] text-white text-[1.1rem] font-medium underline">
              {secondSectionTitle}
            </h1>
          )}
          {dataSecondSection &&
            dataSecondSection.map((item, index) => (
              <div
                onClick={() => {
                  onChangeSecond(item.label);
                  if (!mobile) {
                    setTitle(item.label);
                  } else {
                    return;
                  }
                }}
                key={index + 6}
                className={`w-full h-[25px] ${
                  index == data.length - 1 ? "border-b-none" : "border-b-[1px]"
                } border-b-line flex items-center justify-between px-[5%] box-border pl-2 box-border${
                  index === 0 ? "rounded-t-md" : ""
                } ${index === data.length - 1 ? "rounded-b-md" : ""} `}
              >
                <h1 className="text-white text-[1rem]">{item.label}</h1>
                {currentValueforSecond === item.label && (
                  <FaCheckCircle className="text-green-600" size={15} />
                )}
              </div>
            ))}
          {thirdSectionTitle && (
            <h1 className="self-start ml-[5%] text-white text-[1.1rem] font-medium underline">
              {thirdSectionTitle}
            </h1>
          )}
          {dataThirdSection &&
            dataThirdSection.map((item, index) => (
              <div
                onClick={() => {
                  onChangeThird(item.label);
                  if (!mobile) {
                    setTitle(item.label);
                  } else {
                    return;
                  }
                }}
                key={index + 10}
                className={`w-full h-[25px] ${
                  index == data.length - 1 ? "border-b-none" : "border-b-[1px]"
                } border-b-line flex items-center justify-between px-[5%] box-border pl-2 box-border${
                  index === 0 ? "rounded-t-md" : ""
                } ${index === data.length - 1 ? "rounded-b-md" : ""} `}
              >
                <h1 className="text-white text-[1rem]">{item.label}</h1>
                {currentValueforThird === item.label && (
                  <FaCheckCircle className="text-green-600" size={15} />
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
