import { store } from "react-easy-state"
import { db } from "../firebase"
import uiStore from "./uiStore"
import navigatorService from "../navigatorService"
import _ from "lodash"

const userStore = store({
  user: null,

  createUser: async id => {
    console.log("createUser")
    try {
      const newUser = {
        id: id,
        gearLists: []
      }

      await db
        .collection("users")
        .doc(id)
        .set(newUser)

      return newUser
    } catch (err) {
      console.log(err)
      return err
    }
  },

  fetchUser: async id => {
    console.log("fetchUser", id)
    try {
      const doc = await db
        .collection("users")
        .doc(id)
        .get()

      console.log("doc", doc)

      if (!doc.exists) return null

      const user = doc.data()

      return user
    } catch (err) {
      console.log(err)
      return err
    }
  },

  updateUser: async newState => {
    console.log("updateUser")
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
    console.log("createList")
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
