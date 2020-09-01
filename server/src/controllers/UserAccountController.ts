import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt, { compare } from 'bcrypt';

import db from '../database/connection';

import { findOneUserAccount } from '../utils/findOneUserAccount';

interface userAccountResponse {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export default class UsersController {

  // async index(request: Request, response: Response) {
  //   const { id } = request.body;

  //   const users = await db('usersAccount')
  //     .select('*')
  //     .where('id', '=', id);

  //   return response.status(200).json({users});
  // }

  async create(request: Request, response: Response) {
    const { 
      name,
      lastname,
      email,
      password
    } = request.body;

    const isUserEmail = await findOneUserAccount(email);

    if (isUserEmail) {
      return response.status(406).json({
        message: "email has already been registered!"
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    
    await db('usersAccount')
      .insert({
        name,
        lastname,
        email,
        password: passwordHash
      });

    return response.status(201).json();
  }

  async show(request: Request, response: Response) {
    const { email, password } = request.body;

    const userAccount: userAccountResponse = await findOneUserAccount(email);

    if (!userAccount) {
      return response.status(406).json({ message: 'email invalid' });
    }

    const passwordHash = await bcrypt.compare(password, userAccount.password);

    if (!passwordHash) {
      return response.status(406).json({ message: 'password invalid' });
    }

    const token =  jwt.sign(
      { id: userAccount.id }, 
      'secret', 
      { expiresIn: 86400 }
    );

    return response.status(200).json({
      token,
      user: {
        name: `${userAccount.name} ${userAccount.lastname}`,
        email
      }
    });
  }
}