import { Auth0Provider } from "@bcwdev/auth0provider";
import { planetsService } from "../services/PlanetsService";
import { spaceshipsService } from "../services/SpaceshipsService";
import BaseController from "../utils/BaseController";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.find)
      .get('/:id/species', this.findSpeciesByPlanet)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }
  async find(req, res, next) {
    try {
      const planets = await planetsService.find(req.query)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
  async findSpeciesByPlanet(req, res, next) {
    try {
      const species = await spaceshipsService.findSpeciesByPlanet(req.params.id)
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const planet = await planetsService.create(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}