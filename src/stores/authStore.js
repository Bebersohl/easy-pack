import { store } from "react-easy-state"
import { auth, EmailAuthProvider, db } from "../firebase"
import uiStore from "./uiStore"
import navigatorService from "../navigatorService"
import userStore from "./userStore"

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

      await userStore.createUser(res.user.uid)

      navigatorService.navigate("HomePage")
    } catch (err) {
      return err.message
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

  signIn: async (email, password) => {
    try {
      uiStore.loadingOverlayText = "Signing in..."

      const res = await auth.signInWithEmailAndPassword(email, password)

      authStore.firebaseUser = res.user.uid

      navigatorService.navigate("HomePage")
    } catch (err) {
      console.log(err)
      uiStore.loadingOverlayText = ""
      navigatorService.navigate("SignInPage")
      return err.message
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

  signOut: async () => {
    try {
      uiStore.loadingOverlayText = "Signing out..."
      authStore.firebaseUser = null
      userStore.user = null
      await auth.signOut()
    } catch (err) {
      return err.message
    } finally {
      uiStore.loadingOverlayText = ""
    }
  },

  handleAuthStateChanged: async firebaseUser => {
    console.log("handleAuthStateChanged", firebaseUser)
    try {
      authStore.firebaseUser = firebaseUser

      if (firebaseUser) {
        const user = await userStore.fetchUser(firebaseUser.uid)

        if (!user) {
          await userStore.createUser(firebaseUser.uid)
        }
        navigatorService.navigate("HomePage")
      } else {
        navigatorService.navigate("SignInPage")
      }
    } catch (err) {
      console.log(err)
      return err
    } finally {
      uiStore.loadingOverlayText = ""
    }
  }
})

export default authStore
