const { Router } = require("express");
const router = Router();

const { Country, Tourist_activity } = require("../db.js");

const { Op, Sequelize } = require("sequelize");

const checkerhandler = (toCheck, res) => {
    if( !toCheck || toCheck.length < 1 ) { return res.status(404).send('Error 404: el pais que está buscando no se encontró'); }
    return res.json(toCheck);
}

router.get("/", async (req, res) => {
	try {
		let { name, offset = 0, order, filtro } = req.query;
		let paises;
		if (!name) {
			//si no hay query se buscan los primeros 12
			if(order && order === 'DESC') { order = [Sequelize.literal('(name) DESC')]; }
			else if( order && order === 'POPDESC') { order = [Sequelize.col('population')]; }
			else if( order && order === 'POPASC') { order = [Sequelize.literal('(population) DESC')]; }
			else{ order = [Sequelize.col('name')]; }
			
			if( filtro ) {
				//si hay un filtro, devolvemos los paises que cumplan la condicion
				paises = await Country.findAll( {where: {region: filtro}, order, offset, limit: 12} );
			} else {
				paises = await Country.findAll( { order, offset, limit: 12} );
			}
		} else {
			// si hay query params, se busca por tal
			paises = await Country.findAll({
				where: { name: { [Op.substring]: name } },
				offset,
				limit: 12
			});
        }
        //chequeamos con nuestra funcion si el argumento pasado matcheó con algún pais
        return checkerhandler(paises,res);
	} catch (error) {
		console.log("error:", error);
	}
});

router.get("/:idPais", async (req, res) => {
	//se busca un pais en especifico por id
	const { idPais } = req.params;
	const unPais = await Country.findByPk(idPais,{ include:  Tourist_activity  });
    // checkeamos si se encontro algo 
    return checkerhandler(unPais,res);
});

module.exports = router;
