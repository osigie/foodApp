import { NavLink } from "react-router-dom";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IconType } from "react-icons";

const links = [
  { id: 1, text: "profile", path: "/admin", icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: "add meal",
    path: "/admin/add-meal",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "all meal",
    path: "/admin/all-meal",
    icon: <FaWpforms />,
  },
];
type NavProps = {
  toggleSideBarFunc?: () => void;
};

const NavLinks = (props: NavProps) => {
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
  );
};

export default NavLinks;
