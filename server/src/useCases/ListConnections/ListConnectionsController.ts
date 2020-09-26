import { Request, Response } from 'express';
import { ListConnectionsUseCase } from './ListConnectionsUseCase';

export class ListConnectionsController {
  constructor(
    private listConnectionsUseCase: ListConnectionsUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try { 
      const connections = await this.listConnectionsUseCase.execute();
      
      return response.status(200).json(connections);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }
}