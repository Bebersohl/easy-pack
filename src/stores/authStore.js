import { store } from "react-easy-state"
import { auth, EmailAuthProvider } from "../firebase"
import uiStore from "./uiStore"
import navigatorService from "../navigatorService"
import userStore from "./userStore"
import gearStore from "./gearStore"
import _ from "lodash"

const authStore = store({
  firebaseUser: null,
  deleteAccount: async password => {
    console.log("deleteAccount")
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
    console.log("updateProfile")
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
    console.log("sendPasswordReset")
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
    console.log("createAccount")
    try {
      uiStore.loadingOverlayText = "Creating Account..."

      const res = await auth.createUserWithEmailAndPassword(email, password)

      if (!res.user) throw Error("Account creation failed")

      await res.user.updateProfile({ displayName })
    } catch (err) {
      uiStore.loadingOverlayText = ""
      navigatorService.navigate("SignInPage")
      return err.message
    }
  },

  signIn: async (email, password) => {
    console.log("signIn")
    try {
      uiStore.loadingOverlayText = "Signing in..."

      const res = await auth.signInWithEmailAndPassword(email, password)

      authStore.firebaseUser = res.user.uid
    } catch (err) {
      console.log(err)
      uiStore.loadingOverlayText = ""
      navigatorService.navigate("SignInPage")
      return err.message
    }
  },

  signOut: async () => {
    console.log("signOut")
    try {
      uiStore.loadingOverlayText = "Signing out..."

      authStore.firebaseUser = null
      userStore.user = null
      userStore.isSetupComplete = false

      await auth.signOut()
    } catch (err) {
      console.log(err)
      uiStore.loadingOverlayText = ""
      navigatorService.navigate("HomePage")
      return err.message
    }
  },

  handleAuthStateChanged: async firebaseUser => {
    console.log("handleAuthStateChanged", !!firebaseUser)
    try {
      authStore.firebaseUser = firebaseUser

      if (!firebaseUser) {
        console.log("not firebase user")
        userStore.user = null
        userStore.isSetupComplete = false
        return navigatorService.navigate("HomePage")
      }
      const existingUser = await userStore.fetchUser(firebaseUser.uid)

      if (!existingUser) {
        const newUser = await userStore.createUser(
          firebaseUser.uid,
          firebaseUser.displayName
        )

        if (!newUser) {
          console.error("failed to create new user")

          await authStore.signOut()
        }

        userStore.user = newUser
      } else {
        userStore.user = existingUser
      }

      if (_.isEmpty(gearStore.gearLists)) {
        await gearStore.fetchUserGearLists()
      }

      userStore.isSetupComplete = true

      navigatorService.navigate("HomePage")
    } catch (err) {
      console.log(err)
      return err
    } finally {
      uiStore.loadingOverlayText = ""
    }
  }
})

export default authStore
