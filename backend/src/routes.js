const express = require('express');
const { celebrate } = require('celebrate');

const Ong = require('./controllers/Ong');
const Incident = require('./controllers/Incident');
const Profile = require('./controllers/Profile');
const Session = require('./controllers/Session');

const { createSchema: createOngSchema } = require('./validators/ongs');
const { schema: authenticationSchema } = require('./validators/authentication');
const { schema: sessionSchema } = require('./validators/session');
const {
  getQuerySchema: getQuerySchemaIncident,
  createSchema: createIncidentSchema,
  deleteSchema: deleteIncidentSchema,
} = require('./validators/incident');

const routes = express.Router();

routes.post('/sessions', celebrate({ body: sessionSchema }), Session.create);

routes.get('/ongs', Ong.index);
routes.post('/ongs', celebrate({ body: createOngSchema }), Ong.create);

routes.get(
  '/profile',
  celebrate({ headers: authenticationSchema }),
  Profile.index
);

routes.get(
  '/incidents',
  celebrate({ query: getQuerySchemaIncident }),
  Incident.index
);
routes.post(
  '/incidents',
  celebrate({
    headers: authenticationSchema,
    body: createIncidentSchema,
  }),
  Incident.create
);
routes.delete(
  '/incidents/:id',
  celebrate({
    params: deleteIncidentSchema,
  }),
  Incident.delete
);

module.exports = routes;
