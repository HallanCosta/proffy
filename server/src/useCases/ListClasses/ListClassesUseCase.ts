import { IClassesRepository } from '../../repositories/IClassesRepository';
import { TListClassesRequestDTO } from './ListClassesDTO';

export class ListClassesUseCase {
  constructor(
    private classesRepository: IClassesRepository
  ) {}

  async execute(data: TListClassesRequestDTO) {
    if (!data.week_day || !data.subject || !data.time) {
      throw new Error('Missin filters to search classes');
    }

    const classes = await this.classesRepository.list(data);
    
    return classes;
  }
}