import AppServer from '../../server';
import request from 'supertest';
import factory from '../utils/factories';

describe('User tests suite', () => {
  it('should create an user', async () => {
    const user = await factory.attrs('User');

    const reponse = await request(AppServer)
      .post('/users')
      .send(user);

    expect(reponse.status).toBe(201);
    expect(reponse.status).not.toBe(400);
    expect(reponse.body).toHaveProperty('id');
  });

  it('should not allow to create an user without e-mail', async () => {
    const reponse = await request(AppServer)
      .post('/users')
      .send({});

    expect(reponse.status).toBe(400);
    expect(reponse.status).not.toBe(201);
  });
});
