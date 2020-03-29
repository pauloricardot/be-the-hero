const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
}), sessionController.create);

routes.get('/ongs',celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), OngController.listOng);

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), OngController.createOng);

routes.get('/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }), profileController.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), IncidentsController.listIncidents);

routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  })
}), IncidentsController.createIncidents);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }
), IncidentsController.deleteIncidents);

module.exports = routes;