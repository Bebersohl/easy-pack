import { store } from "react-easy-state";
import {
  auth,
  googleAuthProvider,
  facebookTwitterAuthProvider
} from "../firebase";
import uiStore from "../stores/uiStore";

const authStore = store({
  firebaseUser: null,

  signIn: async platform => {
    try {
      uiStore.loadingOverlayText = "Signing in...";
      const provider =
        platform === "google"
          ? googleAuthProvider
          : facebookTwitterAuthProvider;

      await auth.signInWithRedirect(provider);

      const result = await auth.getRedirectResult();

      authStore.firebaseUser = result.user;
    } catch (err) {
      console.log("err", err);
    } finally {
      uiStore.loadingOverlayText = "";
    }
  },

  signOut: async () => {
    authStore.firebaseUser = null;
    await auth.signOut();
  },

  onAuthChanged: firebaseUser => {
    console.log("auth changed", firebaseUser);
    authStore.firebaseUser = firebaseUser;
  }
});

export default authStore;
