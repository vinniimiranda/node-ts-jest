import { Request, Response, Router } from 'express';

class UserController {
  private router = Router();

  constructor() {
    this.routes();
  }

  public routes() {
    this.router.post('/', this.store);
    return this.router;
  }

  private async store(req: Request, res: Response): Promise<any> {
    res.status(201).json({
      id: 1
    });
  }
}

export default new UserController();
