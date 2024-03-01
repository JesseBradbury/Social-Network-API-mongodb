const User = require('../models/User');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');

        if (!user) {
            return res.status(404).json({ message: 'No user with that ID! Try again' });
        }
        res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });
        if (!deletedUser) {
            return res.status(404).json({ message: 'No user with that ID! Try Again' })
        }
        res.json({ message: 'User successfully deleted', deletedUser});
        } catch (err) {
            res.status(500).json(err);
        }
    },

}