import { v4 as uuid } from 'uuid';

export class Classes {

  public readonly id;

  public name: string;
  public avatar: string;
  public whatsapp: string;
  public bio: string;
  public subject: string;
  public cost: number;

  public schedule: [{
    week_day: string
    from: string;
    to: string;
  }];

  constructor(props: Omit<Classes, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}