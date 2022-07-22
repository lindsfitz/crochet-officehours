const express = require('express');

// Import our modular routers for /tips and /feedback
const projectRouter = require('./projects');
const commentRouter = require('./comments');

const app = express();

app.use('/projects', projectRouter);
app.use('/comments', commentRouter);

module.exports = app;
