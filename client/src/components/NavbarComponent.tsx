import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
// import { useAppContext } from "../context/AppContext";
// import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeFromLocalStorage } from "../features/admin/admin";
import { logOutAdmin } from "../features/admin/admin";
import { useState } from "react";
const NavbarComponent = () => {

  const {admin} = useAppSelector((store) => store.admin)
      const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(logOutAdmin(null));
    removeFromLocalStorage();
  };

  const toggleSideBarFunc = () => {
    console.log("yee");
  };
  // const { toggleSideBarFunc, logOut, user } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSideBarFunc}>
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div>
          {/* <Logo /> */}
          <h3>Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {admin && admin.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" onClick={logOut} className="dropdown-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavbarComponent;
