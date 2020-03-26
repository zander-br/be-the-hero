const express = require('express');

const Ong = require('./controllers/Ong');
const Incident = require('./controllers/Incident');
const Profile = require('./controllers/Profile');
const Session = require('./controllers/Session');

const routes = express.Router();

routes.post('/sessions', Session.create);

routes.get('/ongs', Ong.index);
routes.post('/ongs', Ong.create);

routes.get('/profile', Profile.index);

routes.get('/incidents', Incident.index);
routes.post('/incidents', Incident.create);
routes.delete('/incidents/:id', Incident.delete);

module.exports = routes;
