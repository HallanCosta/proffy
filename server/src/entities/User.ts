import { v4 as uuid } from 'uuid';

export class User {

  public readonly id: string;

  public name: string;
  public lastname: string;
  public email: string;
  public password: string;
  public photo: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}