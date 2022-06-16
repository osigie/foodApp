import moment from "moment";
import { FaRegCheckCircle, FaCalendarAlt } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Meal";
import MealInfo from "./MealInfo";
import { deleteMeal } from "../features/admin/admin";
import { useAppDispatch } from "../app/hooks";
import { getOneMealToState } from "../features/meals/meals";
export type SingleMealType = {
  createdAt: string;
  price: string;
  _id: string;
  name: string;
  description: string;
  updatedAt: string;
};

const SingleMeal = (props: SingleMealType) => {
  //   const { setEditJob, setDeleteJob } = useAppContext();
  const dispatch = useAppDispatch();
  let date = moment(props.createdAt).format("MMM Do YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon"> {props.name.charAt(0)} </div>
      </header>
      <div className="content">
        <div className="content-center">
          <MealInfo icon={<BiFoodMenu />} text={props.name} />
          <MealInfo icon={<FaCalendarAlt />} text={date} />
          <MealInfo icon={<FaRegCheckCircle />} text={props.description} />
          <MealInfo icon={<GiPriceTag />} text={"$" + props.price} />
        </div>

        <footer>
          <Link
            to="/admin/add-meal"
            className="btn edit-btn"
            onClick={() => {
              dispatch(getOneMealToState(props._id));
            }}
          >
            Edit
          </Link>
          <button
            type="submit"
            className="btn delete-btn"
            onClick={() => {
              dispatch(deleteMeal(props._id));
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
