const jsonServer = require('json-server-auth');
const express = require('express');
const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


let nextPatientId = Math.max(...router.db.get('patients').map(p => p.id)) + 1;
let nextMedicoId = Math.max(...router.db.get('medicos').map(m => m.id)) + 1;
let nextAppointmentId = Math.max(...router.db.get('appointments').map(a => a.id)) + 1;

router.db.pre('POST', req => {
  if (req.path === '/patients') {
    req.body.id = nextPatientId++;
  } else if (req.path === '/medicos') {
    req.body.id = nextMedicoId++;
  } else if (req.path === '/appointments') {
    req.body.id = nextAppointmentId++;
  }
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
