import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema({
  name: { type: String, required: true },
  creatorId: { type: ObjectId, required: true, ref: 'Profile' },
  planetId: { type: ObjectId, required: true, ref: 'Planet' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

MoonSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  ref: 'Planet',
  justOne: true
})