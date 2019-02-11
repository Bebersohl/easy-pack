import { store } from "react-easy-state"
import { db } from "../firebase"
import uiStore from "./uiStore"
import navigatorService from "../navigatorService"
import _ from "lodash"

const userStore = store({
  user: null,

  createUser: async id => {
    try {
      const newUser = await db
        .collection("users")
        .doc(id)
        .set({
          id: id,
          gearLists: []
        })

      userStore.user = newUser
    } catch (err) {
      return err
    }
  },

  fetchUser: async id => {
    try {
      const doc = await db
        .collection("users")
        .doc(id)
        .get()

      if (!doc.exists) return

      const user = doc.data()

      userStore.user = user

      return user
    } catch (err) {
      console.log(err)
      return err
    }
  },

  updateUser: async newState => {
    const oldState = _.cloneDeep(userStore.user)
    try {
      await db
        .collection("users")
        .doc(userStore.user.id)
        .update(newState)

      userStore.user = _.merge(userStore.user, newState)
    } catch (err) {
      userStore.user = oldState
      console.log(err)
      return err
    }
  },

  createList: async ({ name, description }) => {
    try {
      uiStore.loadingOverlayText = "Creating List..."

      const docRef = await db.collection("gearLists").add({
        name,
        author: userStore.user.id,
        timestamp: Date.now(),
        data: [],
        description
      })

      await userStore.updateUser({
        gearLists: [...userStore.gearLists, docRef.id]
      })

      navigatorService.navigate("GearListPage", { id: docRef.id })
    } catch (err) {
      console.log(err)
      return err
    } finally {
      uiStore.loadingOverlayText = ""
    }
  }
})

export default userStore
