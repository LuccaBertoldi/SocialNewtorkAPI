const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
    res.json(user);
});

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
});

router.post('/:userId/friends/:friendId', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
    res.json(user);
});

router.delete('/:userId/friends/:friendId', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
    res.json(user);
});

module.exports = router;
