import BottomTabBar from "../components/Core/bottomTabBar/BottomTabBar";
import { Sidebar } from "../components/Core/Sidebar/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen  flex flex-row justify-start px-0 lg:px-0 lg1100:px-[2%] lg1200:px-[3%] lg1300:px-[6%] lg1350:px-[10%] xl:px-[12%] bg-white box-border">
      {true && <Sidebar />}
      <BottomTabBar />
      {children}
    </div>
  );
}

export default Layout;
