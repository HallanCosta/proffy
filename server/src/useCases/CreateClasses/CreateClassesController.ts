import { Request, Response } from 'express';
import { CreateClassesUseCase } from './CreateClassesUseCase';

export class CreateClassesController {
  constructor(
    private createClassesUseCase: CreateClassesUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;

    try {
      await this.createClassesUseCase.execute({
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}