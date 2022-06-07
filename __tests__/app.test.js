const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacSigns } = require('../data/zodiac');

describe('zodiac sign routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/signs should return a list of zodiac signs', async () => {
    const res = await request(app).get('/signs');
    const expected = zodiacSigns.map((zodiacSign) => {
      return { id: zodiacSign.id, name: zodiacSign.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/signs/:id should return specific zodiac sign detail', async () => {
    const res = await request(app).get('/signs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });

  afterAll(() => {
    pool.end();
  });
});
