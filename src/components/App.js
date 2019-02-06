import React from "react";
import Navigator from "../navigator";
import { auth } from "../firebase";
import { view } from "react-easy-state";
import authStore from "../stores/authStore";

class App extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(authStore.onAuthChanged);
  }

  render() {
    return <Navigator />;
  }
}

export default view(App);
