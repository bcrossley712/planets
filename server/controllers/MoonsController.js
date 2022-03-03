import { Auth0Provider } from "@bcwdev/auth0provider";
import { moonsService } from "../services/MoonsService";
import BaseController from "../utils/BaseController";

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.find)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }
  async find(req, res, next) {
    try {
      const moons = await moonsService.find(req.query)
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const moon = await moonsService.create(req.body)
      return res.send(moon)
    } catch (error) {
      next(error)
    }
  }

}