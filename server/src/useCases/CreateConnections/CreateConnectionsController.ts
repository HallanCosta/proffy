import { Request, Response } from 'express';
import { CreateConnectionsUseCase } from './CreateConnectionsUseCase';

export class CreateConnectionsController {
  constructor(
    private createConnectionsUseCase: CreateConnectionsUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { user_id } = request.body;

    try {
      await this.createConnectionsUseCase.execute({
        user_id
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}