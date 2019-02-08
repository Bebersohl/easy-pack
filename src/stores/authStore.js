import { store } from "react-easy-state";
import {
  auth,
  googleAuthProvider,
  facebookTwitterAuthProvider
} from "../firebase";
import uiStore from "../stores/uiStore";

const authStore = store({
  firebaseUser: null,

  signIn: platform => {
    try {
      uiStore.loadingOverlayText = "Signing in...";
      const provider =
        platform === "google"
          ? googleAuthProvider
          : facebookTwitterAuthProvider;

      auth.signInWithRedirect(provider);
    } catch (err) {
      uiStore.loadingOverlayText = "";
      console.log("err", err);
    }
  },

  signOut: async () => {
    try {
      uiStore.loadingOverlayText = "Signing out...";
      authStore.firebaseUser = null;
      await auth.signOut();
    } catch (err) {
      console.log("err", err);
    } finally {
      uiStore.loadingOverlayText = "";
    }
  },

  handleAuthStateChanged: firebaseUser => {
    console.log("handleAuthStateChanged", firebaseUser);
    authStore.firebaseUser = firebaseUser;
  },
  handleGetRedirectResult: result => {
    console.log("handleGetRedirectResult", result);
    authStore.firebaseUser = result.user;
    uiStore.loadingOverlayText = "";
  }
});

export default authStore;
