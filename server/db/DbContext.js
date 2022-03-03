import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GalaxySchema } from "../models/Galaxy";
import { MoonSchema } from "../models/Moon";
import { PlanetSchema } from "../models/Planet";
import { SpaceshipSchema } from "../models/Spaceship";
import { SpeciesSchema } from "../models/Species";
import { StarSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {
  Spaceships = mongoose.model('Spaceship', SpaceshipSchema);
  Species = mongoose.model('Species', SpeciesSchema);
  Moons = mongoose.model('Moon', MoonSchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Stars = mongoose.model('Star', StarSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
