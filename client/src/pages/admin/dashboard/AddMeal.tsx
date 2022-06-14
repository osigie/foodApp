import Wrapper from "../../../assets/wrappers/DashboardFormPage";
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import FormRow from "../../../components/FormRow";
import Alert from "../../../components/Alert";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  createMeal,
  clearAlert,
  setError,
  editMealFromBack,
} from "../../../features/admin/admin";
import {
  handleChangeOfInput,
  clearValues,
} from "../../../features/meals/meals";
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
  const { name, price, description, isEdit, editJobId } = useAppSelector(
    (store) => store.meals
  );

  // const [state, setState] = useState({
  //   name: "",
  //   price: "", //don't forget to convert to number
  //   description: "",
  // });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !description || !price) {
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
    if (!isEdit) {
      dispatch(
        createMeal({
          name,
          description,
          price: Number(price),
        })
      );
      return;
    }
    dispatch(editMealFromBack({ editJobId, name, price, description }));
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(clearValues());
      // setState({ ...state, name: "", price: "", description: "" });
    }
  }, [isLoading]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setState({ ...state, [e.target.name]: e.target.value });
    dispatch(handleChangeOfInput(e));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3> {isEdit ? "Add Meal" : "Edit Meal"}</h3>
        {isAlert && <Alert alertType={alertType} msg={msg} />}
        <div className="form-center">
          <FormRow
            labelText={"name"}
            type={"text"}
            value={name}
            handleChange={handleChange}
            name={"name"}
          />
          <FormRow
            labelText={"description"}
            type={"text"}
            value={description}
            handleChange={handleChange}
            name={"description"}
          />
          <FormRow
            labelText={"price"}
            type={"number"}
            value={price}
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
