export interface UserModel {
  uid: string;
  displayName: string | null;
  email?: string;
  emailVerified?: boolean;
  phoneNumber: string | null;
  photoURL?: string | null;
}
