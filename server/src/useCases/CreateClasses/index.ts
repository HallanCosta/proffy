import { CreateClassesUseCase } from './CreateClassesUseCase';
import { CreateClassesController } from './CreateClassesController';
import { SqliteClassesRepository } from '../../repositories/implementations/SqliteClassesRepository';


const sqliteClassesRepository = new SqliteClassesRepository;

const createClassesUseCase = new CreateClassesUseCase(
  sqliteClassesRepository
);

const createClassesController = new CreateClassesController(
  createClassesUseCase
);

export { createClassesUseCase, createClassesController };