import mongoose from "mongoose";

const MealsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name of meals"],
      maxlength: 100,
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
      maxlength: 200,
    },
    price: {
      type: Number,
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Meals", MealsSchema);
