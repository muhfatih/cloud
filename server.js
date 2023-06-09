var Docker = require('dockerode'); 
var dockerHostIP = "192.168.18.192" 
var dockerHostPort = 4243 
var docker = new Docker({ host: dockerHostIP, port: dockerHostPort }); 

async ()=>{
  await docker.createContainer({Image:"nginx", name:"testing3"})
} 

docker.listContainers({ all: true }, function (err, containers) {
  console.log('Total number of containers: ' + containers.length);
  containers.forEach(function (container) { 
     console.log(`Container ${container.Names} - current status ${container.Status} - based on image ${container.Image}`) 
  }) 
}); 

// async function startStop(containerId) { 
//   var container = await docker.getContainer(containerId) 
//   try { 
//     var data = await container.inspect() 
//     console.log("Inspected container " + JSON.stringify(data)) 
//     var started = await container.start(); 
//     console.log("Started "+started) 
//     var stopped = await container.stop(); 
//     console.log("Stopped "+stopped) 
//   } catch (err) { console.log(err); 
//     } 
// } //startStop//invoke function 
// startStop('db8')

// const express = require('express')
// const app = express()
// const Docker = require('dockerode'); 
// const dockerHostIP = "192.168.18.192" 
// const dockerHostPort = 4243 
// const docker = new Docker({ host: dockerHostIP, port: dockerHostPort }); 

// app.use(express.json())

// app.get('/containers', (req,res) => {
//   const list = [];
//   const len = "";
//   docker.listContainers({ all: true }, (err, containers) => {
//     console.log('Total number of containers: ' + containers.length);
//     containers.forEach(function (container) { 
//        list.push(`Container ${container.Names} - current status ${container.Status} - based on image ${container.Image}`) 
//        len = containers.length
//     }) 
//   }); 
//   console.log(list);
//   res.json({len, list})
// })

// app.listen(8080, () => {
//   console.log("works");
//   docker.listContainers({ all: true }, (err, containers) => {
//     console.log('Total number of containers: ' + containers.length);
//     containers.forEach(function (container) { 
//        console.log(`Container ${container.Names} - current status ${container.Status} - based on image ${container.Image}`) 
//        len = containers.length
//     }) 
//   });
// })

var Docker = require('dockerode'); 
var dockerHostIP = "192.168.18.192" 
var dockerHostPort = 4243 
var docker = new Docker({ host: dockerHostIP, port: dockerHostPort }); 
console.log("tsett");
docker.createContainer({Image:"nginx", name:"testing3"})
async ()=>{
  console.log("tsett");
  await docker.createContainer({Image:"nginx", name:"testing3"})
  console.log("tsett");
} 
// console.log("tsett");
docker.listContainers({ all: true }, function (err, containers) {
  console.log("tsett");
  console.log('Total number of containers: ' + containers.length);
  containers.forEach(function (container) { 
     console.log(`Container ${container.Names} - current status ${container.Status} - based on image ${container.Image}`) 
  }) 
}); 

// async function startStop(containerId) { 
//   var container = await docker.getContainer(containerId) 
//   try { 
//     var data = await container.inspect() 
//     console.log("Inspected container " + JSON.stringify(data)) 
//     var started = await container.start(); 
//     console.log("Started "+started) 
//     var stopped = await container.stop(); 
//     console.log("Stopped "+stopped) 
//   } catch (err) { console.log(err); 
//     } 
// } //startStop//invoke function 
// startStop('db8')