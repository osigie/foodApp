


import mongoose from 'mongoose'

const MealsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name of meals'],
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
      maxlength: 100,
    },
    price: {
      type: Number,
     
    },
    amount: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Job', MealsSchema)