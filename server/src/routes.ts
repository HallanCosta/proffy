import express from 'express';

import db from './database/connection';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const classesController = new ClassesController;
const connectionsController = new ConnectionsController;

const routes = express.Router();

/*routes.get('/classes', async (request, response) => {
  const users = await db('users').select('*');
  const classes = await db('classes').select('*');
  const class_schedule = await db('class_schedule').select('*');

  return response.status(200).json({
    users,
    classes,
    class_schedule
  })
});
*/
routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.post('/connections', connectionsController.create);

export default routes;