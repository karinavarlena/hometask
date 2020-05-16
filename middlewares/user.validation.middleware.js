const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    // id: '',
    // firstName: '',
    // lastName: '',
    // email: '',
    // phoneNumber: '',
    // password: '' /
    const { id, ...newUser } = user;
    const newUserKeys = Object.keys(newUser);
    const reqUser = req.body;

    // check is model has all needed field and values of this fields is more then empty string
    const isMathModel = Object.keys(reqUser).every(key => reqUserKeys.find(userKey => userKey === key && reqUser[userKey].length > 0))
    // delete id if id exist in new user
    delete reqUser.id;
    

    userKeys
    //req.body.keys().every(key => userKeys.find(userKey => userKey === key)); 
    req.body
    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;