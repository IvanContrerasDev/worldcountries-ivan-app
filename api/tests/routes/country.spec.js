/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  flag: 'bandera argentina',
  region: 'América',
  capital: 'Buenos Aires'
};
const skyAct = {
  name: 'sky',
  difficulty: 5,
  duration: 'dos horas',
  season: 'invierno'
};

describe('Routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
  describe('GET /countries/:idPais', () => {
    it('should get 200', () =>
      agent.get('/countries/1').expect(200)
    );
  });
  describe('POST /activity', () => {
    it('should post successfully', () =>
      agent.post('/activity')
      .send(skyAct)
      .expect(200)
      //.expect( (res) => {console.log(res)} )
      .expect((res) => 
        expect(res.text).to.eql('Tourist Activity created successfully')
      )
    );
  });
});
