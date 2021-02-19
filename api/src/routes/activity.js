const { Router } = require('express');
const router = Router();

const { Tourist_activity: Ta } = require('../db.js')

router.post('/', async (req,res) => {
    const {name, difficulty, duration, season} = req.body
    await Ta.create({
        name,
        difficulty,
        duration,
        season
    })
    return res.status(200).send('Tourist Activity created successfully')
})

module.exports = router;
