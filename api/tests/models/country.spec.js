const { Country, conn, Tourist_activity } = require('../../src/db.js');
const { expect } = require('chai');
const { response } = require('express');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    before(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
    before(() => Country.sync({ force: true }));
    describe('models', () => {
      it('should create a country successfully', () => {
        return Country.create({
          name:'Argentina',
          flag: 'bandera argentina',
          region: 'América',
          capital: 'Buenos Aires',
          subregion: 'Sur América',
          area: 4908721,
          population: 43506271,
        });
      });
      it('should save correctly country data', async () =>{
        const busqueda = await Country.findOne( {where: {name: 'Argentina'}} )
        expect(busqueda).to.be.an('object');
        expect(busqueda.dataValues).to.deep.equal({
          name: 'Argentina',
          flag: 'bandera argentina',
          id: 1,
          region: 'América',
          capital: 'Buenos Aires',
          subregion: 'Sur América',
          area: 4908721,
          population: 43506271
        });
      });
      it('should create an activity successfully', () => {
        return Tourist_activity.create({
            name: 'Trekking',
            difficulty: 5,
            duration: 'one to eight hours',
            season: 'verano'
        })
      });
      it('should save correctly data', async () =>{
        const act = await Tourist_activity.findOne({where: {name: 'Trekking'}})
        expect(act).to.be.an('object');
        expect(act.dataValues).to.deep.equal({
          name: 'Trekking',
          difficulty: 5,
          id: act.dataValues.id,
          duration: 'one to eight hours',
          season: 'verano'
        });
      })
    })
  });
});