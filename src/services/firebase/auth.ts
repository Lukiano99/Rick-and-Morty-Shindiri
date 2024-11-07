import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

/*
Sign Up with email and password
*/
interface signUpWithEmailAndPasswordProps {
  email: string;
  password: string;
}
export const signUpWithEmailAndPassword = async ({
  email,
  password,
}: signUpWithEmailAndPasswordProps) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
// ------------------------------------------------------------------------

/*
Log in with email and password
*/
interface logInWithEmailAndPasswordProps {
  email: string;
  password: string;
}
export const logInWithEmailAndPassword = async ({
  email,
  password,
}: logInWithEmailAndPasswordProps) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
// ------------------------------------------------------------------------

/*
Log out
*/
export const logOut = async () => {
  return await auth.signOut();
};
// ------------------------------------------------------------------------
