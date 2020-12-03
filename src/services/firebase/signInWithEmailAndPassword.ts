import firebase from 'firebase/app';
import 'firebase/auth';
import { ErrorFirebase, UpdateUser } from '.';
import { UserModel } from '../../interfaces';

interface SignInWithEmailAndPasswordResponse {
  data?: UserModel;
  error: ErrorFirebase | undefined;
}

export async function SignInWithEmailAndPassword(
  email: string,
  password: string,
): Promise<SignInWithEmailAndPasswordResponse> {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    let dataResponse = {} as UserModel;

    if (response?.user) {
      const {
        displayName,
        email: emailResponse,
        emailVerified,
        phoneNumber,
        photoURL,
        uid,
      } = response.user;

      UpdateUser({
        displayName,
        email: emailResponse as string,
        emailVerified,
        phoneNumber,
        photoURL,
        uid,
      });

      dataResponse = {
        displayName,
        email: emailResponse as string,
        emailVerified,
        phoneNumber,
        photoURL,
        uid,
      };
    }

    return {
      data: dataResponse,
      error: undefined,
    };
  } catch (error) {
    const { code, message } = error;

    return {
      data: undefined,
      error: { code, message },
    };
  }
}
