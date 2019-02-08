import { store } from "react-easy-state"
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
} from "../firebase"
import uiStore from "../stores/uiStore"

const authStore = store({
  firebaseUser: null,

  signIn: platform => {
    try {
      uiStore.loadingOverlayText = "Signing in..."
      let provider

      if (platform === "facebook") {
        provider = facebookAuthProvider
      } else if (platform === "twitter") {
        provider = twitterAuthProvider
      } else {
        provider = googleAuthProvider
      }

      auth.signInWithPopup(provider)
    } catch (err) {
      uiStore.loadingOverlayText = ""
      console.log("err", err)
    }
  },

  signOut: async () => {
    try {
      uiStore.loadingOverlayText = "Signing out..."
      authStore.firebaseUser = null
      await auth.signOut()
    } catch (err) {
      console.log("err", err)
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

  handleAuthStateChanged: firebaseUser => {
    console.log("handleAuthStateChanged", firebaseUser)
    authStore.firebaseUser = firebaseUser
    uiStore.loadingOverlayText = ""
  },
  handleGetRedirectResult: result => {
    console.log("handleGetRedirectResult", result)
    authStore.firebaseUser = result.user
    uiStore.loadingOverlayText = ""
  }
})

export default authStore
