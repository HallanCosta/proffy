type IAdress = {
  email: string;
  name: string;
}

export type TMessage = {
  to: IAdress;
  from: IAdress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(message: TMessage): Promise<void>
}