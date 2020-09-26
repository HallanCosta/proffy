import express from 'express';

//import UserAccountController from './controllers/UserAccountController';
//import ClassesController from './controllers/ClassesController';
import CC from './controllers/ConnectionsController';
import AuthMiddleware from './middlewares/auth';

import { createUserController } from './useCases/CreateUser';
import { authenticateController } from './useCases/Authenticate';
import { createClassesController } from './useCases/CreateClasses';
import { listClassesController } from './useCases/ListClasses';
import { createConnectionsController } from './useCases/CreateConnections';
import { listConnectionsController } from './useCases/ListConnections';

//const userAccountController = new UserAccountController;
//const classesController = new ClassesController;
const cc = new CC;
const authMiddleware = new AuthMiddleware;

const routes = express.Router();

//routes.post('/create-account', userAccountController.create);
routes.post('/create-account', (requst, response) => {
  return createUserController.handle(requst, response);
});

//routes.post('/authenticate', userAccountController.show);
routes.post('/authenticate', (request, response) => {
  return authenticateController.handle(request, response);
})

routes.use(authMiddleware.auth);

routes.get('/classes', (request, response) => {
  return listClassesController.handle(request, response);
});
routes.post('/classes', (request, response) => {
  return createClassesController.handle(request, response);
});

//routes.get('/connections', cc.index);
//routes.post('/connections', connectionsController.create);
routes.get('/connections', (request, response) => {
  return listConnectionsController.handle(request, response);
});
routes.post('/connections', (request, response) => {
  return createConnectionsController.handle(request, response);
});

export default routes;