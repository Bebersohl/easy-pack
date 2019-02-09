import { store } from "react-easy-state"
import { auth } from "../firebase"
import uiStore from "../stores/uiStore"
import navigatorService from "../navigatorService.native"

const authStore = store({
  firebaseUser: null,

  createAccount: async (email, password, displayName) => {
    try {
      uiStore.loadingOverlayText = "Creating Account..."

      const res = await auth.createUserWithEmailAndPassword(email, password)

      if (!res.user) return

      await res.user.updateProfile({ displayName })
    } catch (err) {
      return err.message
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

  signIn: async (email, password) => {
    try {
      uiStore.loadingOverlayText = "Signing in..."

      await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      return err.message
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

  signOut: async () => {
    try {
      uiStore.loadingOverlayText = "Signing out..."
      authStore.firebaseUser = null
      await auth.signOut()
    } catch (err) {
      return err.message
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

  handleAuthStateChanged: firebaseUser => {
    console.log("handleAuthStateChanged", firebaseUser)

    authStore.firebaseUser = firebaseUser

    if (firebaseUser) {
      navigatorService.navigate("HomePage")
    } else {
      navigatorService.navigate("SignInPage")
    }
    uiStore.loadingOverlayText = ""
  }
})

export default authStore
