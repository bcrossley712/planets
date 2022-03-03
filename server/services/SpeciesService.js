import { dbContext } from "../db/DbContext";

class SpeciesService {
  async find(query = {}) {
    const species = await dbContext.Species.find(query)
    return species
  }
  async create(body) {
    const species = await dbContext.Species.create(body)
    return species
  }
}

export const speciesService = new SpeciesService()