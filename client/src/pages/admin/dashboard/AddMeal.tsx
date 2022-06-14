import Wrapper from "../../../assets/wrappers/DashboardFormPage";
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import FormRow from "../../../components/FormRow";
import Alert from "../../../components/Alert";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  createMeal,
  clearAlert,
  setError,
} from "../../../features/admin/admin";

export type MealType = {
  name: string;
  price: number;
  description: string;
  amount?: number;
};

const AddMeal = () => {
  const dispatch = useAppDispatch();
  const { msg, admin, isAlert, isLoading, alertType } = useAppSelector(
    (store) => store.admin
  );

  const [state, setState] = useState({
    name: "",
    price: "", //don't forget to convert to number
    description: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.name || !state.description || !state.price) {
      dispatch(
        setError({
          msg: "please input all fields",
          isAlert: true,
          alertType: "danger",
        })
      );
      dispatch(clearAlert());
      return;
    }

    dispatch(
      createMeal({
        ...state,
        price: Number(state.price),
      })
    );
  };


useEffect(() => {
  if(isLoading){
    setState({ ...state,name: "", price: "", description: "" });
  }
}, [isLoading])


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3> Add Meal </h3>
        {isAlert && <Alert alertType={alertType} msg={msg} />}
        <div className="form-center">
          <FormRow
            labelText={"name"}
            type={"text"}
            value={state.name}
            handleChange={handleChange}
            name={"name"}
          />
          <FormRow
            labelText={"description"}
            type={"text"}
            value={state.description}
            handleChange={handleChange}
            name={"description"}
          />
          <FormRow
            labelText={"price"}
            type={"number"}
            value={state.price}
            handleChange={handleChange}
            name={"price"}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : "create meal"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddMeal;
