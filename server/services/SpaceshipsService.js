import { dbContext } from "../db/DbContext";

class SpaceshipsService {
  async find(query = {}) {
    const spaceships = await dbContext.Spaceships.find(query).populate('planet', 'name').populate('species', 'name')
    return spaceships
  }
  async findSpeciesByPlanet(id) {
    const species = await dbContext.Spaceships.find({ planetId: id }).populate('species', 'name')
    return species
  }
  async create(body) {
    const spaceship = await dbContext.Spaceships.create(body)
    await spaceship.populate('planet', 'name')
    await spaceship.populate('species', 'name')
    return spaceship
  }

}

export const spaceshipsService = new SpaceshipsService()