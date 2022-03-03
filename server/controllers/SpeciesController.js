import { Auth0Provider } from "@bcwdev/auth0provider";
import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.find)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }
  async find(req, res, next) {
    try {
      const species = await speciesService.find(req.query)
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const species = await speciesService.create(req.body)
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }
}