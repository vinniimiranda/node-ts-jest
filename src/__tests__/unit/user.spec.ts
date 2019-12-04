import AppServer from '../../server';
import request from 'supertest';

describe('User tests suite', () => {
  let App = null;
  beforeAll(() => {
    App = new AppServer().server;
  });

  it('should create an user', async () => {
    const reponse = await request(App)
      .post('/users')
      .send({});

    expect(reponse.status).toBe(201);
    expect(reponse.status).not.toBe(400);
    expect(reponse.body).toHaveProperty('id');
  });
});
