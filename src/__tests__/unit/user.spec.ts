import { UserFactory } from './../../database/factories/UserFactory';
import AppServer from '../../server';
import request from 'supertest';

describe('User tests suite', () => {
  it('should create an user', async () => {
    const user = new UserFactory().attrs();

    const response = await request(AppServer)
      .post('/users')
      .send(user);

    expect(response.status).toBe(201);
    expect(response.status).not.toBe(400);
    expect(response.body).toHaveProperty('id');
  });

  it('should not allow to create an user without e-mail', async () => {
    const response = await request(AppServer)
      .post('/users')
      .send();

    expect(response.status).toBe(400);
    expect(response.status).not.toBe(201);
  });

  it('shoud return array of users', async () => {
    const response = await request(AppServer)
      .get('/users')
      .set('Authorization', 'Bearer ');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    for (const user of response.body) {
      expect(user).toBeInstanceOf(Object);
    }
  });
});
