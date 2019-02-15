import React from "react"
import { View } from "react-native"
import Layout from "../Layout"
import authStore from "../../stores/authStore"
import { validateState } from "../../validation"
import StyledInput from "../StyledInput"
import StyledButton from "../StyledButton"
import EStyleSheet from "react-native-extended-stylesheet"
import navigatorService from "../../navigatorService"
import { view } from "react-easy-state"
import StyledText from "../StyledText"
import PageTitle from "../PageTitle"

class SearchListsPage extends React.Component {
  static navigationOptions = {
    headerTitle: <PageTitle />
  }

  render() {
    return (
      <Layout
        navigationOptions={SearchListsPage.navigationOptions}
        error={this.state.error}
      >
        <StyledText>Search Lists</StyledText>
      </Layout>
    )
  }
}

const styles = EStyleSheet.create({})

export default view(SearchListsPage)
