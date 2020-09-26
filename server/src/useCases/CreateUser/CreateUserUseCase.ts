import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { IMailProvider } from '../../providers/IMailProvider';
import { User } from '../../entities/User';

import bcrypt from 'bcrypt';

export class CreateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExist) {
      throw new Error("User already exist.");
    }

    const passwordCrypt = await bcrypt.hash(data.password, 10);

    const user = new User({
      ...data,
      password: passwordCrypt
    });

    await this.userRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: `${user.name} ${user.email}`,
        email: user.email
      },
      from: {
        name: 'Equipe App do Proffy',
        email: 'hallan.costa1@hotmail.com'
      },
      subject: 'Seja bem-vindo à plataforma',
      body: 'Você já pode fazer login em nossa plataforma'
    });
  }
}