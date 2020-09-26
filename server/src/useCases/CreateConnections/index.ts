import { SqliteConnectionsRepository } from '../../repositories/implementations/SqliteConnectionsRepository';
import { CreateConnectionsController } from './CreateConnectionsController';
import { CreateConnectionsUseCase } from './CreateConnectionsUseCase';

const sqliteConnectionsRepository = new SqliteConnectionsRepository;

const createConnectionUseCase = new CreateConnectionsUseCase(
  sqliteConnectionsRepository
);

const createConnectionsController = new CreateConnectionsController(
  createConnectionUseCase
);

export { createConnectionUseCase, createConnectionsController };