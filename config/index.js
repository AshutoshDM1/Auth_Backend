require('dotenv').config(); // Require and configure dotenv to load environment variables

const config = {
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret'
};

module.exports = config;

