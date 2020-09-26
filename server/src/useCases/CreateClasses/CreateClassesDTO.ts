type ScheduleItem = {
  week_day: string;
  from: string;
  to: string;
}

export type TCreateClassesRequestDTO = {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: [ScheduleItem];
}