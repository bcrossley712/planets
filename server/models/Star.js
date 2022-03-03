import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema({
  name: { type: String, required: true },
  creatorId: { type: ObjectId, required: true, ref: 'Profile' },
  galaxyId: { type: ObjectId, required: true, ref: 'Galaxy' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

StarSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  ref: 'Galaxy',
  justOne: true
})