// routes/residentRoutes.js
const express = require('express');
const { Op } = require('sequelize');
const { Resident, Shelter, User } = require('../models'); // Import resident model
const router = express.Router();
const authMiddleware = require('../middleware/auth');
// GET all residents
router.get('/', authMiddleware, async (req, res, next) => {
  console.log("GET all residents", req.user)
  try {
    const user = await User.findByPk(req.user.id);
    console.log("user", user)

    const shelterList = await Shelter.findAndCountAll({
      where: {
        orgId: user.orgId
      }
    })
    console.log("GET all shelterList", shelterList)

    const residents = await Resident.findAndCountAll({
      where: {
        shelterId: {
          [Op.in]: shelterList.rows.map(s=>s.id)
        }
      }
    });
    res.json(residents);
  } catch (error) {
    res.status(500).send(error.message);
    next(error);
  }
});

// GET a resident by ID
router.get('/:id', authMiddleware, async (req, res, next) => {
  try {
    const resident = await Resident.findByPk(req.params.id);
    if (!resident) {
      const error = new Error('Resident not found');
      error.status = 404;
      return next(error);
    }
    res.json(resident)
  } catch (error) {
    next(error);
  }
});

// POST a new resident
router.post('/', authMiddleware, async (req, res) => {
  console.log("post")
  const { residentname, password, createdBy } = req.body;
  const newresident = await Resident.create({ residentname, password, createdBy });
  res.status(201).json(newresident);
});

// PUT to update a resident
router.put('/:id', authMiddleware, async (req, res) => {
  const resident = await Resident.findByPk(req.params.id);
  if (resident) {
    const { residentname, password, activeInd, updatedBy } = req.body;
    resident.residentname = residentname;
    resident.password = password;
    resident.activeInd = activeInd;
    resident.updatedBy = updatedBy;
    await resident.save();
    res.json(resident);
  } else {
    res.status(404).send('resident not found');
  }
});

// DELETE a resident
router.delete('/:id', authMiddleware, async (req, res) => {
  const resident = await Resident.findByPk(req.params.id);
  if (resident) {
    await resident.destroy();
    res.status(204).send(); // No content
  } else {
    res.status(404).send('resident not found');
  }
});

module.exports = router;