import { Request, Response, Router } from 'express';
// import User from '../models/UserModel';

class AuthController {
  private router = Router();

  constructor() {
    this.routes();
  }

  public routes() {
    this.router.post('/login', this.login);
    return this.router;
  }

  private async login(req: Request, res: Response): Promise<any> {
    const token = 'abcerer';
    res.status(200).json({ token });
  }
}

export default new AuthController();
