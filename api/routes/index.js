const express = require('express');
const cors = require('cors');
const projects = require('./projectsRoute');
const tasks = require('./tasksRoute');

module.exports = app => {
  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res) => {
    return res.status(200).json({ pong: "pong" });
  });

  app.use(tasks);
  app.use(projects);
}