import BottomTabBar from "../components/Core/bottomTabBar/BottomTabBar";
import { Sidebar } from "../components/Core/Sidebar/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen  flex flex-row justify-start px-0 lg:px-0 lg1300:px-[8%] lg1350:px-[10%] xl1500:px-[12%] bg-white box-border">
      {true && <Sidebar />}
      <BottomTabBar />
      {children}
    </div>
  );
}

export default Layout;
