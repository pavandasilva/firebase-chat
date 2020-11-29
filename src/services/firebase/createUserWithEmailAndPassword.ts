import firebase from 'firebase/app';
import 'firebase/auth';
import { ErrorFirebase } from './_interfaces';
import { UpdateProfile } from '.';

interface CreateUserWithEmailAndPasswordResponse {
  ok: boolean;
  error: ErrorFirebase | undefined;
}

export async function CreateUserWithEmailAndPassword(
  email: string,
  password: string,
  displayName?: string,
): Promise<CreateUserWithEmailAndPasswordResponse> {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (!!displayName && response?.user) {
      await UpdateProfile(response.user, { displayName });
    }

    return {
      ok: true,
      error: undefined,
    };
  } catch (error) {
    return {
      ok: false,
      error: {
        code: error.code,
        message: error.message,
      },
    };
  }
}
