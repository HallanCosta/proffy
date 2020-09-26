import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/User';
import db from '../../database/connection';

export class SqliteUsersRepository implements IUsersRepository {

  async findByEmail(email: string): Promise<User> {
    const user = await db('usersAccount')
      .select('*')
      .where('email', '=', email)
      .first();

    return user;
  } 

  async save(user: User) {
    await db('usersAccount').insert(user);
  }

}