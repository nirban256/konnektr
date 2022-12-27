import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/profile/Header";
import Quest from "../../components/quests/Quest";
import QuestType from "../../components/quests/QuestType";
import DashboardLayout from "../../layout/dashboard";

function Quests() {
  const router = useRouter();
  return (
    <DashboardLayout>
      <div className="w-full h-[100vh] flex flex-col items-center justify-start bg-white overflow-y-scroll pb-16 sm:pb-0 box-border lg1100:mr-[1%] lg1200:mr-[1%] lg1300:mr-[2%] xl1400:mr-[10%] xl1500:mr-[16%]">
        <Header />
        <div className="w-[100%] h-[10vh] bg-transparent flex sm:hidden gap-x-2 items-center justify-between">
          <QuestType title="All" isActive />
          <QuestType title="Open" />
          <QuestType title="Ended" />
          <QuestType title="Pending" />
        </div>
        <div className="w-[80%] h-[100%] grid grid-cols-1 sm:grid-cols-3 place-content-start place-items-center gap-y-[25px] overflow-y-scroll scrollbar-hide ">
          <Quest
            onClick={() => router.push("/quests/1")}
            image={"/assets/images/questbg.jpg"}
            points={"5k"}
            status={"Ended"}
            title="Signup Quest"
          />
          <Quest
            onClick={() => router.push("/quests/1")}
            image={"/assets/images/questbg.jpg"}
            points={"3k"}
            status={"Ended"}
            title="Signup Quest"
          />
          <Quest
            onClick={() => router.push("/quests/1")}
            image={"/assets/images/questbg.jpg"}
            points={"5k"}
            status={"open"}
            title="Signup Quest"
          />
          <Quest
            onClick={() => router.push("/quests/1")}
            image={"/assets/images/questbg.jpg"}
            points={"6k"}
            status={"pending"}
            title="Signup Quest"
          />
          <Quest
            onClick={() => router.push("/quests/1")}
            image={"/assets/images/questbg.jpg"}
            points={"7k"}
            status={"locked"}
            title="Signup Quest"
          />
          <Quest
            onClick={() => router.push("/quests/1")}
            image={"/assets/images/questbg.jpg"}
            points={"3k"}
            status={"locked"}
            title="Signup Quest"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Quests;
