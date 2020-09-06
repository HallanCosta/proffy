import express from 'express';

import db from './database/connection';

import UserAccountController from './controllers/UserAccountController';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import AuthMiddleware from './middlewares/auth';

const userAccountController = new UserAccountController;
const classesController = new ClassesController;
const connectionsController = new ConnectionsController;
const authMiddleware = new AuthMiddleware;

const routes = express.Router();

routes.post('/create-account', userAccountController.create);
routes.post('/authenticate', userAccountController.show);

routes.use(authMiddleware.auth);
//routes.get('/users', userAccountController.show);

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;