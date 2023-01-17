import BottomTabBar from "../components/Core/bottomTabBar/BottomTabBar";
import Drawer from "../components/Core/Drawer/Drawer";
import { Sidebar } from "../components/Core/Sidebar/Sidebar";
import { useAppStateContext } from "../context/contextProvider";

function Layout({ children }: { children: React.ReactNode }) {
  const {
    // @ts-ignore
    isDrawerOpen,
  } = useAppStateContext();
  return (
    <div className="h-screen  flex flex-row justify-start px-0  bg-white box-border">
      {true && <Sidebar />}
      {isDrawerOpen && <Drawer />}
      <BottomTabBar />
      {children}
    </div>
  );
}

export default Layout;
