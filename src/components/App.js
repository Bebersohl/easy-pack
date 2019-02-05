import React from "react";
import { AppContainer } from "../navigator";
import { auth } from "../firebase";

export default class App extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(async firebaseUser => {
      console.log("auth changed");
    });
  }

  render() {
    return <AppContainer />;
  }
}
