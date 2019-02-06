import React from "react";
import uiStore from "../stores/uiStore";
import LoadingOverlay from "../components/LoadingOverlay";
import { View } from "react-native";
import { view } from "react-easy-state";

const Layout = ({ children }) => {
  console.log("loading", uiStore.loadingOverlayText);
  return (
    <View style={{ flex: 1 }}>
      {children}
      {uiStore.loadingOverlayText && <LoadingOverlay />}
    </View>
  );
};

export default view(Layout);
