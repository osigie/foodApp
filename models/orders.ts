

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
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
    User: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);