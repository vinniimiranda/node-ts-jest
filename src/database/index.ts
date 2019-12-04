import * as path from 'path';
import { Sequelize } from 'sequelize-typescript';

class Connection {
  constructor() {
    this.connect();
  }

  private async connect(): Promise<any> {
    try {
      const db = await new Sequelize({
        dialect: 'sqlite',
        host: 'localhost',
        port: parseInt('5432'),
        database:
          process.env.NODE_ENV === 'test' ? 'ali_lite_test' : 'ali_lite',
        username: 'postgres',
        password: 'postgres',
        storage: './src/__tests__/database.sqlite',
        operatorsAliases: false,
        logging: false,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        // timezone: '-03:00',
        modelPaths: [path.normalize(`${__dirname}/../models`)],
        modelMatch: (filename, member) => {
          return (
            filename.substring(0, filename.indexOf('.model')) ===
            member.toLowerCase()
          );
        }
      });
      db.sync();
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new Connection();
