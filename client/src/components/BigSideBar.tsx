

import Wrapper from "../assets/wrappers/BigSidebar";
// import { useAppContext } from "../context/AppContext";
import Navlinks from "./NavLinks";
// import Logo from "./Logo";
const BigSideBar = () => {
  // const { showSideBar } = useAppContext();
 
  return (
    <Wrapper>
      <div
        // className={
        //   showSideBar ? "sidebar-container" : "sidebar-container show-sidebar"
        // }
      >
        <div className="content">
          <header>
            {/* <Logo /> */}
          </header>

          <Navlinks  />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;