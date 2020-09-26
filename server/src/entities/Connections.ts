import { v4 as uuid } from 'uuid';

export class Connections {

  private readonly id: string;

  private user_id: string;

  constructor(props: Omit<Connections, 'id'>, id?: string) {
    Object.assign(this, props);
    
    if (!id) {
      this.id = uuid();
    }
  }
}