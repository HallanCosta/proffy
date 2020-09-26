import { Connections } from '../../entities/Connections';
import { IConnectionsRepository } from '../../repositories/IConnectionsRepository';
import { TCreateConnectionsRequestDTO } from './CreateConnectionsDTO';

export class CreateConnectionsUseCase {
  constructor(
    private connectionsRepository: IConnectionsRepository   
  ) {}

  async execute(data: TCreateConnectionsRequestDTO) {
    const connections = new Connections(data);

    await this.connectionsRepository.save(connections);
  }
}