import { Request, Response } from 'express';
import { AuthenticateUseCase } from './AuthenticateUseCase';

export class AuthenticateController {
  constructor(
    private authenticateUseCase: AuthenticateUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body; 

    try {
      const userAuth = await this.authenticateUseCase.execute({
        email,
        password
      });

      return response.status(200).json(userAuth);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}