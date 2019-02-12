import { store } from "react-easy-state"

const routeStore = store({
  navigatorRef: null,
  get currentRoute() {
    if (!routeStore.navigatorRef) return "easy-pack"
    let route = routeStore.navigatorRef.state.nav
    while (route.routes) {
      route = route.routes[route.index]
    }
    return route.routeName
  }
})

export default routeStore
