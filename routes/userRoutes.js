// routes/userRoutes.js
const express = require('express');
const { User } = require('../models'); // Import user model
const router = express.Router();
const authMiddleware = require('../middleware/auth');
// GET all users
router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
    next(error);
  }
});

// GET a user by ID
router.get('/:id', authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      return next(error);
    }
    res.json(user)
  } catch (error) {
    next(error);
  }
});

// POST a new user
router.post('/', authMiddleware, async (req, res) => {
  console.log("post")
  const { username, password, createdBy } = req.body;
  const newuser = await User.create({ username, password, createdBy });
  res.status(201).json(newuser);
});

// PUT to update a user
router.put('/:id', authMiddleware, async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    const { username, password, activeInd, updatedBy } = req.body;
    user.username = username;
    user.password = password;
    user.activeInd = activeInd;
    user.updatedBy = updatedBy;
    await user.save();
    res.json(user);
  } else {
    res.status(404).send('user not found');
  }
});

// DELETE a user
router.delete('/:id', authMiddleware, async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.status(204).send(); // No content
  } else {
    res.status(404).send('user not found');
  }
});

module.exports = router;