import React from "react"
import uiStore from "../stores/uiStore"
import LoadingOverlay from "../components/LoadingOverlay"
import { View, Platform } from "react-native"
import { view } from "react-easy-state"
import WebHeader from "./WebHeader"
import ErrorMessage from "./ErrorMessage"

const Layout = ({ children, navigationOptions, error }) => {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      {Platform.OS === "web" && (
        <WebHeader navigationOptions={navigationOptions} />
      )}
      {!!error && <ErrorMessage message={error} />}
      {children}
      {!!uiStore.loadingOverlayText && <LoadingOverlay />}
    </View>
  )
}

export default view(Layout)
