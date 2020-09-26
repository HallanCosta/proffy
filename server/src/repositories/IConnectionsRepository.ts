import { Connections } from '../entities/Connections';

export type TListConnectionsResponse = {
  total: string;
};

export interface IConnectionsRepository {
  save(connections: Connections): Promise<void>;
  list(): Promise<TListConnectionsResponse>;
}