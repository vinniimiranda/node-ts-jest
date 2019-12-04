import AppServer from '../../server';
import request from 'supertest';

describe('User tests suite', () => {
  it('should create an user', async () => {
    const reponse = await request(AppServer)
      .post('/users')
      .send({});

    expect(reponse.status).toBe(201);
    expect(reponse.status).not.toBe(400);
    expect(reponse.body).toHaveProperty('id');
  });
});
