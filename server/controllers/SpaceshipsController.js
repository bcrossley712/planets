import { Auth0Provider } from "@bcwdev/auth0provider";
import { spaceshipsService } from "../services/SpaceshipsService";
import BaseController from "../utils/BaseController";

export class SpaceshipsController extends BaseController {
  constructor() {
    super('api/spaceships')
    this.router
      .get('', this.find)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }
  async find(req, res, next) {
    try {
      const spaceships = await spaceshipsService.find(req.query)
      return res.send(spaceships)
    }
    catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const spaceship = await spaceshipsService.create(req.body)
      return res.send(spaceship)
    } catch (error) {
      next(error)
    }
  }
}