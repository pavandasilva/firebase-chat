import firebase from 'firebase/app';
import 'firebase/auth';
import { ErrorFirebase } from '.';
import { UserModel } from '../../interfaces';

interface UpdateProfileResponse {
  ok: boolean;
  error: ErrorFirebase | undefined;
}

export async function UpdateUser(
  user: UserModel,
): Promise<UpdateProfileResponse> {
  try {
    await firebase.firestore().collection('users').doc(user.uid).update(user);
    return {
      ok: true,
      error: undefined,
    };
  } catch (error) {
    const { code, message } = error;

    return {
      ok: false,
      error: { code, message },
    };
  }
}
