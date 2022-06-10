
import { NavLink } from "react-router-dom";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import {IconType} from "react-icons"

const links = [
  { id: 1, text: "stats", path: "/", icon: <IoBarChartSharp/> },
  { id: 2, text: "all jobs", path: "all-jobs", icon: <MdQueryStats /> },
  { id: 3, text: "add job", path: "add-jobs", icon: <FaWpforms /> },
  { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
];
type NavProps = {
  toggleSideBarFunc: ()=>void;
};

const NavLinks = (props:NavProps) => {
  return (
    <div className="nav-links">
    {links.map(({ icon, text, id, path }) => {
      return (
        <NavLink
          to={path}
          key={id}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={props.toggleSideBarFunc}
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      
      );
    })}
  </div>
  )
}

export default NavLinks