import { Container } from "unstated";
import {
  auth,
  googleAuthProvider,
  facebookTwitterAuthProvider
} from "../firebase";

class AuthContainer extends Container {
  state = { firebaseUser: null };

  signIn = async platform => {
    const provider =
      platform === "google" ? googleAuthProvider : facebookTwitterAuthProvider;

    await auth.signInWithRedirect(provider);

    const result = await auth.getRedirectResult();

    this.setState({ firebaseUser: result.user });
  };
  signOut = async () => {
    this.setState({ firebaseUser: null });
    await auth.signOut();
  };

  onAuthChanged = firebaseUser => {
    console.log("auth changed");
    this.setState({ firebaseUser });
  };
}

export default new AuthContainer();
