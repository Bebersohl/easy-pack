import { store } from "react-easy-state"
import { auth, EmailAuthProvider } from "../firebase"
import uiStore from "../stores/uiStore"
import navigatorService from "../navigatorService"

const authStore = store({
  firebaseUser: null,
  deleteAccount: async password => {
    try {
      uiStore.loadingOverlayText = "Deleting Account..."

      const credentials = EmailAuthProvider.credential(
        authStore.firebaseUser.email,
        password
      )

      await authStore.firebaseUser.reauthenticateAndRetrieveDataWithCredential(
        credentials
      )

      await authStore.firebaseUser.delete()

      navigatorService.navigate("SignInPage", {
        success: "Account deleted successfully"
      })
    } catch (err) {
      return err.message
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

  updateProfile: async displayName => {
    try {
      uiStore.loadingOverlayText = "Updating Profile..."

      await authStore.firebaseUser.updateProfile({ displayName })

      navigatorService.navigate("ProfilePage")
    } catch (err) {
      return err.message
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

  sendPasswordReset: async email => {
    try {
      uiStore.loadingOverlayText = "Sending Password Reset..."

      await auth.sendPasswordResetEmail(email)

      navigatorService.navigate("SignInPage", {
        success: "Password reset email sent"
      })
    } catch (err) {
      return err.message
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

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

      navigatorService.navigate("HomePage")
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

    uiStore.loadingOverlayText = ""

    if (firebaseUser) {
      navigatorService.navigate("HomePage")
    } else {
      navigatorService.navigate("SignInPage")
    }
  }
})

export default authStore
