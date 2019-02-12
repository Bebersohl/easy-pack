import React from "react"
import { View, ActivityIndicator } from "react-native"
import { view } from "react-easy-state"
import uiStore from "../stores/uiStore"
import EStyleSheet from "react-native-extended-stylesheet"
import StyledText from "./StyledText"

class LoadingOverlay extends React.Component {
  render() {
    return (
      <View style={styles.loading}>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 4
          }}
        >
          <ActivityIndicator />
          <StyledText>
            {this.props.loadingOverlayText || uiStore.loadingOverlayText}
          </StyledText>
        </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  loading: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.75,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default view(LoadingOverlay)
