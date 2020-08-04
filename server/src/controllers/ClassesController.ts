import { Request, Response } from 'express';

import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface User {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: [ScheduleItem];
}

class ClassesController {

  async index(request: Request, response: Response) {
    const filters = request.query;

    const week_day = filters.subject as string;
    const subject = filters.subject as string;
    const time = filters.subject as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missin filters to search classes'
      })
    }

    const timeInMinute = convertHourToMinutes(time);

    const classes = await db('classes')
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    }: User = request.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      });

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx('class_schedule').insert(classSchedule); 

      await trx.commit();

      return response.status(201).send();
    } catch (err) {
      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }
}

export default ClassesController;