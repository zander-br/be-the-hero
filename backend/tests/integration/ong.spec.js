const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('ONG', () => {
  const ong = {
    name: 'APAD',
    email: 'contato@apad.com.br',
    whatsapp: '11000000000',
    city: 'São Paulo',
    uf: 'SP',
  };

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const { body } = await request(app).post('/ongs').send(ong);

    expect(body).toHaveProperty('id');
    expect(body.id).toHaveLength(8);
  });

  it('should be able to return list ONG', async () => {
    const id = generateUniqueId();
    await connection('ongs').insert({ id, ...ong });

    const { body } = await request(app).get('/ongs').send();

    expect(body).toHaveLength(1);
    expect(body[0].id).toBe(id);
  });
});
