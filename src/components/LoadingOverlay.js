import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { view } from "react-easy-state";
import uiStore from "../stores/uiStore";

class LoadingOverlay extends React.Component {
  render() {
    return (
      <View style={styles.loading}>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 4,
            opacity: 1
          }}
        >
          <ActivityIndicator />
          <Text>{uiStore.loadingOverlayText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default view(LoadingOverlay);
