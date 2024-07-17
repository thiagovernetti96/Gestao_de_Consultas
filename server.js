const jsonServer = require('json-server');
const express = require('express');
const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

let nextPatientId = 1;
let nextMedicoId = 1;
let nextAppointmentId = 1;

router.db.get('patients').forEach(patient => {
  if (patient.id >= nextPatientId) {
    nextPatientId = patient.id + 1;
  }
}).write();

router.db.get('medicos').forEach(medico => {
  if (medico.id >= nextMedicoId) {
    nextMedicoId = medico.id + 1;
  }
}).write();

router.db.get('appointments').forEach(appointment => {
  if (appointment.id >= nextAppointmentId) {
    nextAppointmentId = appointment.id + 1;
  }
}).write();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    if (req.path === '/patients') {
      req.body.id = nextPatientId++;
    } else if (req.path === '/medicos') {
      req.body.id = nextMedicoId++;
    } else if (req.path === '/appointments') {
      req.body.id = nextAppointmentId++;
    }
  }
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
