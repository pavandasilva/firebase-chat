import { UserModel } from './userModel';

export interface Message {
  uid: string;
  message: string;
  romUid: string;
  createdAt: string;
  user?: UserModel;
}
