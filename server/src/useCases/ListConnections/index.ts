import { SqliteConnectionsRepository } from '../../repositories/implementations/SqliteConnectionsRepository';
import { ListConnectionsUseCase } from './ListConnectionsUseCase';
import { ListConnectionsController } from './ListConnectionsController';

const sqliteConnectionsRepository = new SqliteConnectionsRepository;

const listConnectionsUseCase = new ListConnectionsUseCase(
  sqliteConnectionsRepository
);

const listConnectionsController = new ListConnectionsController(
  listConnectionsUseCase
);

export { listConnectionsUseCase, listConnectionsController };