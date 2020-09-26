import { SqliteClassesRepository } from '../../repositories/implementations/SqliteClassesRepository';
import { ListClassesUseCase } from './ListClassesUseCase';
import { ListClassesController } from './ListClassesController';

const sqliteClassesRepository = new SqliteClassesRepository;

const listClassesUseCase = new ListClassesUseCase(
  sqliteClassesRepository
);

const listClassesController = new ListClassesController(
  listClassesUseCase
);

export { listClassesUseCase, listClassesController };