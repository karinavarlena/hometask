const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user
    getAll() {
        return UserRepository.getAll();
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    create(data) {
       const user = UserRepository.create(data);
       return !user? null: user;
    }
}

module.exports = new UserService();