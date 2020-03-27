const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Session', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create session', async () => {
    const id = generateUniqueId();

    const ong = {
      id,
      name: 'APAD',
      email: 'contato@apad.com.br',
      whatsapp: '11000000000',
      city: 'São Paulo',
      uf: 'SP',
    };

    await connection('ongs').insert(ong);

    const { body } = await request(app).post('/sessions').send({ id });

    expect(body.name).toBe(ong.name);
  });
});
