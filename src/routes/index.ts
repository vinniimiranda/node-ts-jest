import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';

class Routing {
  router: Router;
  constructor() {
    this.router = Router();
    this.router.get('/', (req: Request, res: Response) =>
      res.status(200).json({
        root: 'Api root routes !!!'
      })
    );
    this.router.use('/users', UserController.routes());
  }
}

export default new Routing().router;
