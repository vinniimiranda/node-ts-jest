import { UserFactory } from './../../database/factories/UserFactory';
import AppServer from '../../server';
import request from 'supertest';

describe('Auth tests', () => {
  it('Shoud authenticate an user', async () => {
    const user = await new UserFactory().create();

    const response = await request(AppServer)
      .post('/auth/login')
      .send(user);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
