import { IConnectionsRepository } from '../../repositories/IConnectionsRepository';
import { TListConnectionsRequestDTO } from './ListConnectionsDTO';

export class ListConnectionsUseCase {
  constructor(
    private connectionsRepository: IConnectionsRepository
  ) {}

  async execute() {
    const connections = await this.connectionsRepository.list();

    return connections;
  }
}