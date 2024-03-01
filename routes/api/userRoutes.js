const router = require('express').Router();

// This will grab the actual mongoose functions from the controllers file. 
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// route for /api/users
router.route('/').get(getUsers).post(createUser);

// route for /api/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;


