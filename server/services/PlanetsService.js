import { dbContext } from "../db/DbContext";

class PlanetsService {
  async find(query = {}) {
    const planets = await dbContext.Planets.find(query).populate('star', 'name')
    return planets
  }
  async create(body) {
    const planet = await dbContext.Planets.create(body)
    await planet.populate('star', 'name')
    return planet
  }
}

export const planetsService = new PlanetsService()