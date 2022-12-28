const  express = require('express');
const router = express.Router();
const programingLanguajes = require('../services/programingLanguajes');

router.get('/', async function (req, res, next) {
    try{
        res.json( await programingLanguajes.read(req.query));
    }catch (err) {
        console.error("Este es el error: "+ err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        res.json(await programingLanguajes.create(req.body))
    } catch (err) {
        console.error("Este es el error: "+ err.message);
        next(err);
    }
})

router.put('/', async function(req, res, next) {
    try {
        res.json(await programingLanguajes.update(req.body.id, req.body))
    } catch (err) {
        console.error("Este es el error: "+ err.message);
        next(err);
    }
})

router.delete('/', async function(req, res, next) {
    console.log(req.query.id)
    try {
        res.json(await programingLanguajes.delete1(req.query.id))
    } catch (err) {
        console.error("Este es el error: "+ err.message);
        next(err);
    }
})

module.exports = router;