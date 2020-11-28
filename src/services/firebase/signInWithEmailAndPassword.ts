import firebase from 'firebase/app';
import 'firebase/auth';
import { ErrorFirebase } from '.';

interface User {
  displayName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  photoURL: string;
}

interface SignInWithEmailAndPasswordResponse {
  data?: User;
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

    let dataResponse = {} as User;

    if (response?.user) {
      const {
        displayName,
        email: emailResponse,
        emailVerified,
        phoneNumber,
        photoURL,
      } = response.user;

      dataResponse = {
        displayName: displayName as string,
        email: emailResponse as string,
        emailVerified,
        phoneNumber: phoneNumber as string,
        photoURL: photoURL as string,
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
