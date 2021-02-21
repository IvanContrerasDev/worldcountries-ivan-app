const { Router } = require("express");
const router = Router();

const { Country, Tourist_activity } = require("../db.js");

const { Op } = require("sequelize");

const checkerhandler = (toCheck, res) => {
    if( !toCheck || toCheck.length < 1 ) { return res.status(404).send('Error 404: el pais que está buscando no se encontró'); }
    return res.json(toCheck);
}

router.get("/", async (req, res) => {
	try {
		const {offset = 0} = req.body;
		const { name } = req.query;
		let paises;
		if (!name) {
			//si no hay query se buscan los primeros 10
			paises = await Country.findAll({ offset, limit: 10 });
		} else {
			// si hay query params, se busca por tal
			paises = await Country.findAll({
				where: { name: { [Op.substring]: name } },
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
