const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/user');

// Middleware
app.use(bodyParser.json());
app.use("/user", userRoutes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});