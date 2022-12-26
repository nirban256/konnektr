import BottomTabBar from "../components/Core/bottomTabBar/BottomTabBar";
import { Sidebar } from "../components/Core/Sidebar/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-row justify-start bg-white lg1300:px-[12%] box-border">
      {true && <Sidebar />}
      <BottomTabBar />
      <div className="w-full  overflow-y-scroll">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
