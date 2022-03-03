import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const SpeciesSchema = new Schema({
  name: { type: String, required: true },
  creatorId: { type: ObjectId, required: true, ref: 'Profile' },
},
  { timestamps: true, toJSON: { virtuals: true } }
)

SpeciesSchema.virtual('spaceship', {
  localField: 'spaceshipId',
  foreignField: '_id',
  ref: 'Spaceship',
  justOne: true
})