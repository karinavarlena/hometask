const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user
router.use("/", function(request, response){
    const users = UserService.getAll();
    response.send(users);
});

router.use("/:id", function(request, response){
    const user = UserService.search(request.params.id);
    if(user){
        response.send(user);
    } else {
        response.status(404).send({ error: true, message: 'No such user' });
    }
});

router.post("/", createUserValid, function(request, response){
    const user = UserService.create(request.body);
    if(user){
        response.send(user);
    } else {
        response.status(400).send({ error: true, message: 'Unfortunately, an error occurred while creating the user.' });
    } 
});

router.put("/:id", function(request, response){
    response.send("Добавление товара");
});

router.delete("/:id", function(request, response){
    response.send("Добавление товара");
});

module.exports = router;