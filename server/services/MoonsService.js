import { dbContext } from "../db/DbContext";

class MoonsService {
  async find(query = {}) {
    const moons = await dbContext.Moons.find(query).populate('planet', 'name')
    return moons
  }
  async create(body) {
    const moon = await dbContext.Moons.create(body)
    await moon.populate('planet', 'name')
    return moon
  }
}

export const moonsService = new MoonsService()