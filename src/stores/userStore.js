import { store } from "react-easy-state"
import { auth, EmailAuthProvider, db } from "../firebase"

const userStore = store({
  user: null,
  createUser: async id => {
    try {
      const newUser = await db
        .collection("users")
        .doc(id)
        .set({
          id: id,
          lists: []
        })

      userStore.user = newUser
    } catch (err) {
      return err
    }
  },
  fetchUser: async id => {
    console.log("fetching!!!")
    try {
      const doc = await db
        .collection("users")
        .doc(id)
        .get()

      if (!doc.exists) throw Error("User does not exist")

      userStore.user = doc.data()

      console.log(userStore.user)
    } catch (err) {
      console.log(err)
      return err
    }
  },
  createList: async ({ title }) => {
    await db
      .collection("gearLists")
      .doc()
      .set({
        title,
        author: userStore.user.id,
        timestamp: Date.now(),
        data: [],
        tags: []
      })
  }
})

export default userStore
