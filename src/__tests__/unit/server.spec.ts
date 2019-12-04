import AppServer from '../../server';
import request from 'supertest';

describe('Server Test Suite', () => {
  let App = null;
  beforeAll(() => {
    App = new AppServer().server;
  });

  it('Should be up', async () => {
    const server = await request(App).get('/');

    // expect(server.status).toBe(200);
    expect(server.status).not.toBe(500);
  });
});
