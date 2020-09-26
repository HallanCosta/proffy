import { AuthenticateController } from './AuthenticateController';
import { AuthenticateUseCase } from './AuthenticateUseCase';
import { SqliteUsersRepository } from '../../repositories/implementations/SqliteUsersRepository';

const sqliteUsersRepository = new SqliteUsersRepository;

const authenticateUseCase = new AuthenticateUseCase(
  sqliteUsersRepository
);

const authenticateController = new AuthenticateController(
  authenticateUseCase
);
  
export { authenticateUseCase, authenticateController };
