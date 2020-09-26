import { Classes } from '../entities/Classes';

export type TListClasses = {
  week_day: string;
  subject: string;
  time: string;
}

export type TListClassesResponse = {
  id: string;
  subject: string;
  cost: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

export interface IClassesRepository {
  save(classes: Classes): Promise<void>;
  list(proffys: TListClasses): Promise<TListClassesResponse>;
}