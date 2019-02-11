import React from "react"
import { StyleSheet } from "react-native"
import Layout from "./Layout"
import authStore from "../stores/authStore"
import StyledInput from "./StyledInput"
import { validateState } from "../validation"
import StyledButton from "./StyledButton"
import userStore from "../stores/userStore"

class CreateListPage extends React.Component {
  static navigationOptions = {
    title: "Create List"
  }

  state = {
    error: "",
    name: "",
    description: ""
  }

  handleChangeText = (field, text) => {
    this.setState({ [field]: text })
  }

  handleCreateList = async () => {
    const stateError = validateState(this.state)

    if (stateError) return this.setState({ error: stateError })

    await userStore.createList(this.state)
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

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: 15
  }
})

export default CreateListPage
