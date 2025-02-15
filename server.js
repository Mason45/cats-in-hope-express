// // server.js
// require('dotenv').config();
// const express = require('express');
// const { sequelize } = require('./models'); // Import Sequelize instance
// const userRoutes = require('./routes/userRoutes');
// const residentRoutes = require('./routes/residentRoutes');
// const authRoutes = require('./routes/auth');

// const errorHandler = require('./errorMiddleware'); // Import the error handler

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// // Use routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/residents', residentRoutes);

// // Test route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Express app with Sequelize!');
// });
// // Use the error handling middleware
// app.use(errorHandler);

// // Sync database and start server
// sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// }).catch(err => {
//   console.error('Unable to connect to the database:', err);
// });

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});