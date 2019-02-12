import React from "react"
import { view } from "react-easy-state"
import Layout from "../Layout"
import LoadingOverlay from "../LoadingOverlay"

class AuthLoadingPage extends React.Component {
  static navigationOptions = {
    title: "Loading"
  }

  render() {
    return (
      <Layout navigationOptions={AuthLoadingPage.navigationOptions}>
        <LoadingOverlay loadingOverlayText="AUTH LOADING PAGE" />
      </Layout>
    )
  }
}

export default view(AuthLoadingPage)
