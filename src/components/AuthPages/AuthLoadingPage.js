import React from "react"
import { view } from "react-easy-state"
import Layout from "../Layout"

class AuthLoadingPage extends React.Component {
  static navigationOptions = {
    title: "Loading"
  }

  render() {
    return <Layout navigationOptions={AuthLoadingPage.navigationOptions} />
  }
}

export default view(AuthLoadingPage)
