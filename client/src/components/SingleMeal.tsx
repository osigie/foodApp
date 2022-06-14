import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Meal";
// import { useAppContext } from "../context/AppContext";
import MealInfo from "./MealInfo";

type SingleMealType = {
  createdAt: string;
  company: string;
  position: string;
  _id: string;
  status: string;
  jobLocation: string;
  jobType: string;
};

const SingleMeal = (props: SingleMealType) => {
  //   const { setEditJob, setDeleteJob } = useAppContext();
  let date = moment(props.createdAt).format("MMM Do YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon"> {props.company.charAt(0)} </div>
        <div className="info">
          <h5>{props.company}</h5>
          <p>{props.position} </p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <MealInfo icon={<FaLocationArrow />} text={props.jobLocation} />
          <MealInfo icon={<FaCalendarAlt />} text={date} />
          <MealInfo icon={<FaBriefcase />} text={props.jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>

        <footer>
          <Link
            to="/add-jobs"
            className="btn edit-btn"
            onClick={() => {
              //   setEditJob(_id);
            }}
          >
            Edit
          </Link>
          <button
            type="submit"
            className="btn delete-btn"
            onClick={() => {
              //   setDeleteJob(_id);
            }}
          >
            Delete
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};

export default SingleMeal;
