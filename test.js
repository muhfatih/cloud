const express = require('express');
const Docker = require('dockerode');

const app = express();
const port = 3000;

const docker = new Docker();

// Create a new Docker container
app.post('/containers/create', async (req, res) => {
  try {
    const container = await docker.createContainer(req.body);
    res.json({ message: 'Container created successfully', containerId: container.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create container' });
  }
});

// List all Docker containers
app.get('/containers', async (req, res) => {
  try {
    const containers = await docker.listContainers({ all: true });
    res.json(containers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to list containers' });
  }
});

// Start a Docker container
app.post('/containers/:id/start', async (req, res) => {
  try {
    const container = docker.getContainer(req.params.id);
    await container.start();
    res.json({ message: 'Container started successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to start container' });
  }
});

// Stop a Docker container
app.post('/containers/:id/stop', async (req, res) => {
  try {
    const container = docker.getContainer(req.params.id);
    await container.stop();
    res.json({ message: 'Container stopped successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to stop container' });
  }
});

// Delete a Docker container
app.delete('/containers/:id', async (req, res) => {
  try {
    const container = docker.getContainer(req.params.id);
    await container.remove({ force: true });
    res.json({ message: 'Container deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete container' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
