import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const GalaxySchema = new Schema({
  name: { type: String, required: true },
  creatorId: { type: ObjectId, ref: 'Profile', required: true }
},
  { timestamps: true, toJSON: { virtuals: true } }
)
