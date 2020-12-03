import { UserModel } from './userModel';

export interface Message {
  message: string;
  user?: UserModel;
}
