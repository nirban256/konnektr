import React, { useEffect, useState } from "react";
import ColorExtractor from "./ColorExtractor";
import { BsCoin, BsFillClockFill } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
import { AiFillCheckCircle } from "react-icons/ai";

type Quest = {
  image?: any;
  title: string;
  status: "locked" | "pending" | "Ended" | "open";
  points: number | string;
};

function Quest({ image, points, status, title }: Quest) {
  const [colors, setColors] = useState<any[]>([]);

  const getStatus = (status: "locked" | "pending" | "Ended" | "open") => {
    switch (status) {
      case "open":
        return <BsFillClockFill size={22} color={colors[1] ?? "lightblue"} />;
      case "pending":
        return <BsFillClockFill size={22} color={colors[1] ?? "lightblue"} />;
      case "Ended":
        return <AiFillCheckCircle size={22} color={colors[1] ?? "lightblue"} />;
      case "locked":
        return <GiPadlock size={22} color={colors[1] ?? "lightblue"} />;
    }
  };

  return (
    <div
      style={{
        background:
          colors.length !== 0
            ? `linear-gradient(to top right,${colors[0]},${colors[1]},${colors[2]},${colors[3]})`
            : `linear-gradient(to top right,#FFD600,#EFBA00,#F1D750,#F0BC01,#FCFF59)`,
      }}
      className={` w-[90%] max-w-[240px] sm:max-w-[210px] h-[45vh]  max-h-[265px] rounded-[35px] flex items-center justify-center p-[15px] box-border`}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="relative w-full h-full bg-cover bg-no-repeat bg-center rounded-[25px] overflow-hidden"
      >
        <div className="absolute bottom-0 w-full h-[30%] bg-questBlurbg backdrop-blur-[21px] flex flex-col items-center justify-between">
          <div className="w-full h-[50%] flex items-center justify-between px-2 box-border">
            <h1 className="text-white font-bold">{title}</h1>
            {getStatus(status)}
          </div>
          <div className="w-full h-1/2 flex items-center justify-start pl-3 box-border">
            <BsCoin size={22} color={colors[1] ?? "lightblue"} />
            <h1 className="ml-1 text-white font-medium">{points} koints</h1>
          </div>
        </div>
      </div>
      <ColorExtractor
        className={"hidden"}
        getColor={(colors) => {
          setColors(colors);
        }}
        image={image}
      />
    </div>
  );
}

export default Quest;
