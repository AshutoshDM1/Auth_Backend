const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes.js');
const postsRoutes = require('./routes/postsRoutes.js');
const {jwtSecret} = require('./config/index.js');

// Middleware
app.use(bodyParser.json());
app.use("/v1/user", userRoutes)
app.use("/v1/user/chat", postsRoutes)

app.get('/', (req, res) => {res.send('Hello World')});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});