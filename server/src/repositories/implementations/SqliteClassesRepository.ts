import { IClassesRepository, TListClasses, TListClassesResponse } from '../IClassesRepository';
import { Classes } from '../../entities/Classes';

import db from '../../database/connection';
import convertHourToMinutes from '../../utils/convertHourToMinutes';
import { TListConnectionsResponse } from '../IConnectionsRepository';
import { TListConnectionsRequestDTO } from '../../useCases/ListConnections/ListConnectionsDTO';

export class SqliteClassesRepository implements IClassesRepository {
  async save(classes: Classes) {
    const trx = await db.transaction();

    await trx('users').insert({
      id: classes.id,
      name: classes.name,
      avatar: classes.avatar,
      whatsapp: classes.whatsapp,
      bio: classes.bio
    });
    
    await trx('classes').insert({
      id: classes.id,
      subject: classes.subject,
      cost: classes.cost,
      user_id: classes.id
    });
    
    const classSchedule = classes.schedule.map((scheduleItem) => {
      return {
        class_id: classes.id,
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
      };
    });
   
    await trx('class_schedule').insert(classSchedule); 
    
    await trx.commit();
  }

  async list(proffys: TListClasses): Promise<TListClassesResponse> {
    const timeInMinute = convertHourToMinutes(proffys.time);

    const classes: object = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(proffys.week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinute])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinute])
      })
      .where('classes.subject', '=', proffys.subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return classes as TListClassesResponse;
  }
}