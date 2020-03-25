const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',sessionController.create);

routes.get('/ongs', OngController.listOng);
routes.post('/ongs', OngController.createOng );

routes.get('/profile', profileController.index);

routes.get('/incidents', IncidentsController.listIncidents);
routes.post('/incidents', IncidentsController.createIncidents);
routes.delete('/incidents/:id', IncidentsController.deleteIncidents);

module.exports = routes;