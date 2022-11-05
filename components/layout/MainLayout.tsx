import classNames from "classnames";
import { Navbar } from "flowbite-react";
import { FC } from "react";
import JumpingSearchbar from "../JumpingSearchbar";
type propsType = {
  toolbars?: JSX.Element[] | JSX.Element;
  showNavbar: boolean
};
const MainLayout: FC<propsType> = ({ toolbars, children, showNavbar }) => {
  return (
    <div className=" flex flex-col w-full fixed top-0 right-0 h-screen overflow-x-auto">
      <div className={classNames("w-full", "flex flex-col")}>{toolbars}</div>
      <div className={classNames("w-full h-full", " flex flex-col flex-1 bg-white")}>
        {children}
      </div>

      {showNavbar && <div
        className={classNames(
          "fixed bottom-0 right-0 bg-white w-full h-320 z-20"
        )}
      >
        <div className="relative"><Navbar /></div>
      </div>}
    </div>
  );
};
export default MainLayout;
