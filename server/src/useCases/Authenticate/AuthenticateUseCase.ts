import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { TUserAccountRequestDTO } from './AuthenticateDTO';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthenticateUseCase {
  constructor(
    private userRepository: IUsersRepository
  ) {}

  async execute(data: TUserAccountRequestDTO) {
    const userAlreadyExist = await this.userRepository.findByEmail(data.email);

    if (!userAlreadyExist) {
      throw new Error("Email invalid");
    }

    const user = new User(userAlreadyExist, userAlreadyExist.id);

    const passwordCrypt = await bcrypt.compare(data.password, user.password);
    
    if (!passwordCrypt) {
      throw new Error("Password invalid");
    }

    const token = jwt.sign(
      { id: user.id },
      'secret',
      { expiresIn: 86400 }
    );
    
    return {
      token,
      user: {
        name: `${user.name} ${user.lastname}`,
        email: user.email,
        photo: user.photo,
      }
    };
  } 
}