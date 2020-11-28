import firebase from 'firebase/app';
import 'firebase/auth';
import { ErrorFirebase } from './_interfaces';

interface CreateUserWithEmailAndPasswordResponse {
  ok: boolean;
  error: ErrorFirebase | undefined;
}

export async function CreateUserWithEmailAndPassword(
  email: string,
  password: string,
): Promise<CreateUserWithEmailAndPasswordResponse> {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
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
