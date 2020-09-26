import { Request, Response } from "express";
import { ListClassesUseCase } from "../ListClasses/ListClassesUseCase";

export class ListClassesController {
  constructor(
    private listClassesUseCase: ListClassesUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const week_day = request.query.week_day as string;
    const subject = request.query.subject as string;
    const time = request.query.time as string;

    try {
      const classes = await this.listClassesUseCase.execute({
        week_day,
        subject,
        time
      });

      return response.status(200).json(classes);
    } catch(err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}