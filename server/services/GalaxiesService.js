import { dbContext } from "../db/DbContext";

class GalaxiesService {
  find(query = {}) {
    const galaxies = dbContext.Galaxies.find(query)
    return galaxies
  }
  create(body) {
    const galaxy = dbContext.Galaxies.create(body)
    return galaxy
  }

}

export const galaxiesService = new GalaxiesService()