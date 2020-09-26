import { Connections } from '../../entities/Connections';
import { TListConnectionsResponse } from '../IConnectionsRepository';
import db from '../../database/connection';

export class SqliteConnectionsRepository {
  async save(connections: Connections) {
    await db('connections').insert(connections);
  }

  async list(): Promise<TListConnectionsResponse> {
    const totalConnections: object = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return { total } as TListConnectionsResponse;
  }
}