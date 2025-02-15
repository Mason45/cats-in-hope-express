// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Import user model
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { username, password, createdBy } = req.body;

    try {
        console.log('register');

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({ username, password: hashedPassword, createdBy });

        res.status(201).json({ id: newUser.id, username: newUser.username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Login route
router.post('/login', async (req, res) => {

    
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        console.log('Compare passwords')
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create and sign JWT token
        const token = jwt.sign({ id: user.id, username: user.username, orgId: user.orgId }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;