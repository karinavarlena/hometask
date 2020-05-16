const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter
router.use("/", function(request, response){
    response.send("Добавление товара");
});

router.use("/:id", function(request, response){
    response.send("Добавление товара");
});

router.post("/", function(request, response){
    response.send("Добавление товара");
});

router.put("/:id", function(request, response){
    response.send("Добавление товара");
});

router.delete("/:id", function(request, response){
    response.send("Добавление товара");
});

module.exports = router;