import React from "react";
import { auth } from "../firebase";

export default class AppWrapper extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(this.props.Auth.onAuthChanged);
  }

  render() {
    return <>{this.props.children}</>;
  }
}
