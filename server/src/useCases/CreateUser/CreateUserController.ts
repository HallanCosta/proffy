import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name, lastname, email, password, photo } = request.body;

    try {
      
      await this.createUserUseCase.execute({
        name,
        lastname,
        email,
        password,
        photo
      });

      return response.json(201).send();
    } catch (err) {
      return response.json(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}