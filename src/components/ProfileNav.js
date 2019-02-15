import React from "react"
import authStore from "../stores/authStore"
import { TouchableOpacity } from "react-native"
import { View, Platform, Text } from "react-native"
import { view } from "react-easy-state"
import navigatorService from "../navigatorService"
import ProfileIcon from "./Icons/ProfileIcon"
import SignInIcon from "./Icons/SignInIcon"

const ProfileNav = () => {
  return (
    <View style={{ marginLeft: 15 }}>
      {authStore.firebaseUser ? (
        <TouchableOpacity
          onPress={() => navigatorService.navigate("ProfilePage")}
        >
          <ProfileIcon style={{ color: "#007AFF" }} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigatorService.navigate("SignInPage")}
        >
          <SignInIcon style={{ color: "#007AFF" }} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default view(ProfileNav)
