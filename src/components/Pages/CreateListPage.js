import React from "react"
import Layout from "../Layout"
import authStore from "../../stores/authStore"
import StyledInput from "../StyledInput"
import { validateState } from "../../validation"
import StyledButton from "../StyledButton"
import userStore from "../../stores/userStore"
import EStyleSheet from "react-native-extended-stylesheet"
import navigatorService from "../../navigatorService"
import { view } from "react-easy-state"
import gearStore from "../../stores/gearStore"
import PageTitle from "../PageTitle"

class CreateListPage extends React.Component {
  static navigationOptions = {
    headerTitle: <PageTitle />
  }

  state = {
    error: "",
    name: "",
    description: ""
  }

  componentDidMount() {
    if (!authStore.firebaseUser) navigatorService.navigate("HomePage")
  }

  handleChangeText = (field, text) => {
    this.setState({ [field]: text })
  }

  handleCreateList = async () => {
    const stateError = validateState(this.state)

    if (stateError) return this.setState({ error: stateError })

    await gearStore.createList(this.state)
  }

  render() {
    return (
      <Layout
        navigationOptions={CreateListPage.navigationOptions}
        error={this.state.error}
      >
        <StyledInput
          value={this.state.name}
          placeholder="Name"
          onChangeText={text => this.handleChangeText("name", text)}
        />
        <StyledInput
          value={this.state.description}
          placeholder="Description (optional)"
          onChangeText={text => this.handleChangeText("description", text)}
          multiline
        />
        <StyledButton title="Create List" onPress={this.handleCreateList} />
      </Layout>
    )
  }
}

const styles = EStyleSheet.create({
  buttonWrapper: {
    marginBottom: 15
  }
})

export default view(CreateListPage)
