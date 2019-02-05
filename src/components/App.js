import React from "react";
import Navigator from "../navigator";
// import { auth } from "../firebase";
import { Provider, Subscribe } from "unstated";
import AuthContainer from "../containers/AuthContainer";
import AppWrapper from "../components/AppWrapper";

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[AuthContainer]}>
          {Auth => (
            <AppWrapper Auth={Auth}>
              <Navigator />
            </AppWrapper>
          )}
        </Subscribe>
      </Provider>
    );
  }
}
