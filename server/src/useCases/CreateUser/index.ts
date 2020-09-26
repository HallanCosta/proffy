import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';
import { SqliteUsersRepository } from '../../repositories/implementations/SqliteUsersRepository';
import { MailTrapMailProvider } from '../../providers/implements/MailTrapMailProvider';

const sqliteUsersRepository = new SqliteUsersRepository;
const mailTrapMailProvider = new MailTrapMailProvider;

const createUserUseCase = new CreateUserUseCase(
  sqliteUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };