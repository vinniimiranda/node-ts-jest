import express from 'express';
import routes from './routes';

export default class AppServer {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.routes();
  }

  private routes() {
    this.server.use(routes);
  }

  public listen(port: number) {
    this.server.listen(port, () =>
      console.log(`Server running at port: ${port}`)
    );
  }
}
