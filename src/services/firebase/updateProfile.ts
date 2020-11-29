import firebase from 'firebase/app';
import 'firebase/auth';
import { ErrorFirebase } from '.';

interface UpdateProfileResponse {
  ok: boolean;
  error: ErrorFirebase | undefined;
}

interface Profile {
  displayName?: string | null | undefined;
  photoURL?: string | null | undefined;
}

type User = firebase.User;

export async function UpdateProfile(
  user: User,
  profile: Profile,
): Promise<UpdateProfileResponse> {
  try {
    await user.updateProfile(profile);
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
