const router = require('express').Router();
let Fitness = require('../models/Fitness');

router.get('/', (req, res) => {
    Fitness.find()
    .then(user => res.json(Fitness))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
    const username = req.body.username;
    const date = Date.parse (req.body.date);
    const workout = req.body.workout;
    const duration = Number(req.body.duration);
    const social = Number(req.body.social);
    const calories = Number(req.body.calories);

    const newFitness = new Fitness ({
        username,
        date,
        workout,
        duration,
        social,
        calories,
    }); 

newFitness.save()
.then(()=> res.json('Fitness added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
