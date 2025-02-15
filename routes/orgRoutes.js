// routes/userRoutes.js
const express = require('express');
const { Org } = require('../models'); // Import user model
const router = express.Router();

// GET all Orgs
router.get('/', async (req, res) => {
  try {
    const orgs = await Org.findAll();
    res.json(orgs);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET a org by ID
router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    const org = await Org.findByPk(req.params.id);
    if (!org) {
      return res.status(404).json({ message: 'org not found' });
    }
    res.json(org);
});

// POST a new org
router.post('/', async (req, res) => {
  console.log("post")
  const { orgName, ceeatedBy } = req.body;
  const neworg = await User.create({ orgName, ceeatedBy });
  res.status(201).json(neworg);
});

// PUT to update a org
router.put('/:id', async (req, res) => {
  const org = await Org.findByPk(req.params.id);
  if (org) {
    const { orgName, updatedBy } = req.body;
    org.orgName = orgName;
    org.updatedBy = updatedBy;
    await org.save();
    res.json(org);
  } else {
    res.status(404).send('org not found');
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const org = await Org.findByPk(req.params.id);
  if (org) {
    await user.destroy();
    res.status(204).send(); // No content
  } else {
    res.status(404).send('org not found');
  }
});

module.exports = router;