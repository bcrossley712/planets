import { dbContext } from "../db/DbContext";

class StarsService {
  async find(query = {}) {
    const stars = await dbContext.Stars.find(query).populate('galaxy', 'name')
    return stars
  }
  async create(body) {
    const star = await dbContext.Stars.create(body)
    await star.populate('galaxy', 'name')
    return star
  }
}

export const starsService = new StarsService()