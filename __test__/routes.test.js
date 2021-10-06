/* eslint-disable no-undef */
const { app, server } = require('../index');
const supertest = require('supertest');

const api = supertest(app);

test('should return json', async () => {
    await api
      .get('/')
      .expect(200)
      .expect('Content-Type', /application\/json/);
});
test('should return value', async () => {
    const res = await api
      .get('/');
    expect(res.body).toEqual({
      name: 'reg003-roman-numerals-slack',
      version: '1.0.0',
    });
});
test('should return a arabig number', async () => {
    await api
      .post('/')
      .send({ text: 'parse XII' })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect({
        response_type: 'in channel',
        text: 12,
      });
});
test('should return a roman number', async () => {
    await api
      .post('/')
      .send({ text: 'stringify 12' })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect({
        response_type: 'in channel',
        text: 'XII',
      });
});
test('should return a roman number', async () => {
    await api
      .post('/')
      .send({ text: 'stringify 1' })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect({
        response_type: 'in channel',
        text: 'I',
      });
});
test('should return a error', async () => {
    await api
      .post('/')
      .send({ text: '' })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect({
        response_type: 'in channel',
        text: 'I',
      });
});
afterAll(() => {
    server.close();
});
  