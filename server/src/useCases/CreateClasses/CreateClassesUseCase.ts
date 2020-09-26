import { Classes } from '../../entities/Classes';
import { IClassesRepository } from '../../repositories/IClassesRepository';
import { TCreateClassesRequestDTO } from './CreateClassesDTO';

export class CreateClassesUseCase {
  constructor(
    private classesRepository: IClassesRepository
  ) {}

  async execute(data: TCreateClassesRequestDTO) {
    const classes = new Classes(data);
    
    await this.classesRepository.save(classes);
  }
}