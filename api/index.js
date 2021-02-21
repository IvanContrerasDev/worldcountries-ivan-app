const server = require("./src/app.js");

const { default: axios } = require("axios");

const { conn, Country, Tourist_activity, country_activity } = require("./src/db.js");

//Syncing all the models at once.
conn
	.sync({ force: true })
	.then(() => {
		//levantar servidor
		server.listen(4001, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log("%s listening at 4001");
			}
		});
		//llamamos y tomamos datos necesarios de la api externa para guardarlos en nuestra db
		return axios
			.get("https://restcountries.eu/rest/v2/all")
			.then((response) => {
				response.data.map(async (pais) => {
					let { name, flag, region, capital, subregion, area, population } = pais;
					await Country.create({
						name,
						flag,
						region,
						capital,
						subregion,
						area,
						population,
					});
				});
			});
	})
	.then(() => {
		console.log("Paises Creados");
		return Tourist_activity.bulkCreate(
			[{
			name: 'Trekking',
			difficulty: 5,
			duration: 'de una a 6 horas',
			season: 'verano'
			},
			{
				name: 'Sky',
				difficulty: 5,
				duration: 'dos horas',
				season: 'invierno'
			}]
		)
	})
	.then(() => {
		console.log("Actividades creadas");
		return country_activity.create({
			countryId: 11,
			touristActivityId:1
		})
	})
	.then(() => {
		console.log("Match creado");
	})
	.catch((error) => {
		console.log("cant create country for reason:", error);
	});
