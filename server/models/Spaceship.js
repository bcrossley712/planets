import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const SpaceshipSchema = new Schema({
  creatorId: { type: ObjectId, required: true, ref: 'Profile' },
  speciesId: { type: ObjectId, required: true, ref: 'Species' },
  planetId: { type: ObjectId, required: true, ref: 'Planet' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

SpaceshipSchema.virtual('species', {
  localField: 'speciesId',
  foreignField: '_id',
  ref: 'Species',
  justOne: true
})

SpaceshipSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  ref: 'Planet',
  justOne: true
})