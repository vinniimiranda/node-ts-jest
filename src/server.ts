import express from 'express';
import routes from './routes';

export default class AppServer {
  server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private routes() {
    this.server.use(routes);
  }

  private middlewares() {
    this.server.use(express.json());
  }

  public listen(port: number) {
    this.server.listen(port, () =>
      console.log(`Server running at port: ${port}`)
    );
  }
}
