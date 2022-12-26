import BottomTabBar from "../components/Core/bottomTabBar/BottomTabBar";
import { Sidebar } from "../components/Core/Sidebar/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen  flex flex-row justify-start px-0 lg:px-0 lg1100:px-[2%] lg1200:px-[3%] lg1300:px-[5%] lg1350:px-[10%] xl1500:px-[13%] xl1650:px-[15%] xl1750:px-[17%] xl1950:px-[20%]  bg-white box-border">
      {true && <Sidebar />}
      <BottomTabBar />
      {children}
    </div>
  );
}

export default Layout;
