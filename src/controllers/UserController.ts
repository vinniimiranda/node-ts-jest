import { Request, Response, Router } from 'express';
import User from '../models/UserModel';

class UserController {
  private router = Router();

  constructor() {
    this.routes();
  }

  public routes() {
    this.router.post('/', this.store);
    this.router.get('/', this.index);
    return this.router;
  }

  private async store(req: Request, res: Response): Promise<any> {
    if (!req.body.email) {
      res.status(400).json({
        message: 'Email is required'
      });
      return;
    }
    res.status(201).json({
      id: 1
    });
  }

  private async index(req: Request, res: Response): Promise<any> {
    const users = await User.findAll();
    res.status(200).json(users);
  }
}

export default new UserController();
