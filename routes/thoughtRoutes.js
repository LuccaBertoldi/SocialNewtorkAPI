const router = require('express').Router();
const Thought = require('../models/Thought');
const User = require('../models/User');


router.get('/', async (req, res) => {
    const thoughts = await Thought.find();
    res.json(thoughts);
});

router.get('/:id', async (req, res) => {
    const thought = await Thought.findById(req.params.id);
    res.json(thought);
});

router.post('/', async (req, res) => {
    const thought = await Thought.create(req.body);
    await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
    res.json(thought);
});

router.put('/:id', async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(thought);
});

router.delete('/:id', async (req, res) => {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    res.json(thought);
});

router.post('/:thoughtId/reactions', async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true });
    res.json(thought);
});

router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
    res.json(thought);
});

module.exports = router;
