const { Router } = require('express');
const router = Router();

const { Tourist_activity: Ta, country_activity } = require('../db.js')

router.post('/:idPais', async (req,res) => {
    const {name, difficulty, duration, season} = req.body
    Ta.create({
        name,
        difficulty,
        duration,
        season
    })
    .then( (respuesta) => {
        country_activity.create({
        countryId: req.params.idPais,
        touristActivityId: respuesta.dataValues.id
    })})
    return res.status(200).send('Tourist Activity created successfully')
})

module.exports = router;
