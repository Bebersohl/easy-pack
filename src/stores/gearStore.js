import { store } from "react-easy-state"
import userStore from "../stores/userStore"
import uiStore from "../stores/uiStore"
import { db } from "../firebase"
import shortid from "shortid"
import navigatorService from "../navigatorService"

const gearStore = store({
  gearLists: {},
  activeGearListId: null,
  fetchGearList: async id => {
    if (!id) return

    if (gearStore.gearLists.hasOwnProperty(id)) {
      return gearStore.gearLists[id]
    }

    const doc = await db
      .collection("gearLists")
      .doc(id)
      .get()

    const gearList = doc.data()

    gearStore.gearLists[id] = gearList

    return gearList
  },
  fetchUserGearLists: async () => {
    const gearListPromises = userStore.user.gearListIds.map(gearListId =>
      db
        .collection("gearLists")
        .doc(gearListId)
        .get()
    )

    const docs = await Promise.all(gearListPromises)

    const gearLists = docs.reduce((acc, doc) => {
      if (!doc.exists) return acc

      const gearList = doc.data()

      return {
        ...acc,
        [gearList.id]: gearList
      }
    }, {})

    gearStore.gearLists = gearLists
  },

  createList: async ({ name, description }) => {
    console.log("createList")
    try {
      uiStore.loadingOverlayText = "Creating List..."

      const id = shortid.generate()

      const newGearList = {
        id,
        name,
        author: userStore.user.id,
        timestamp: Date.now(),
        data: [],
        description
      }

      await db
        .collection("gearLists")
        .doc(id)
        .set(newGearList)

      await userStore.updateUser({
        gearListIds: [...userStore.user.gearListIds, id]
      })

      gearStore.gearLists[id] = newGearList

      navigatorService.navigate("GearListPage", { id })
    } catch (err) {
      console.log(err)
      return err
    } finally {
      uiStore.loadingOverlayText = ""
    }
  }
})

export default gearStore
