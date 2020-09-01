import db from '../database/connection';

async function findOneUserAccount(email: string) {
  const userAccount = await db('usersAccount')
    .select('*')
    .where('email', '=', email)
    .first();

  return userAccount;
}

export { findOneUserAccount };