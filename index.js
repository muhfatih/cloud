const express = require('express');
const Docker = require('dockerode');

const app = express();
const port = 8080;

const docker = new Docker({host:'localhost', port:4243});

app.use(express.json());

// Create a new Docker container
app.post('/containers/create', async (req, res) => {
  const { image, name } = req.body;
  try {
    docker.createContainer({ Image: image, name: name})
    .then((container) => {
      res.json({ message: 'Container created successfully', containerId: container.id });
    })
    .catch((err) => {console.error('Error:', err);
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create container' });
  }
});

app.get('/containers/list', async (_, res) => {
  try {
    docker.listContainers((err, containers) => {
    if (err) {
      res.json(err);
    } else {
    res.json(containers );
    }
});  
  } catch (err) {
    res.status(500).json(err.message);
  }
})

app.get('/containers/:id', async (req,res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.inspect((err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data)
      }
    });  
  } catch (err) {
    res.status(500).json(err.message);
  }
})

app.post('/containers/start/:id', async (req, res) => {
  try {
    const container = docker.getContainer(req.params.id);
    await container.start();
    res.json({ message: 'container-started-successfully' });
  } catch (error) {
    res.status(500).json({ error: 'failed-to-start-container' });
  }
});

app.post('/containers/stop/:id', async (req, res) => {
  try {
    const container = docker.getContainer(req.params.id);
    await container.stop();
    res.json({ message: 'container-stopped-successfully' });
  } catch (error) {
    res.status(500).json({ error: 'failed-to-start-container' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

