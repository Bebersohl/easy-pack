import React from "react"
import { View, TouchableOpacity } from "react-native"
import { view } from "react-easy-state"
import gearStore from "../../stores/gearStore"
import Layout from "../Layout"
import navigatorService from "../../navigatorService"
import userStore from "../../stores/userStore"
import StyledButton from "../StyledButton"
import StyledText from "../StyledText"
import GearListPreivew from "../GearListPreview"
import InfoMessage from "../InfoMessage"
import authStore from "../../stores/authStore"

import HeaderButtons, {
  HeaderButton,
  Item
} from "react-navigation-header-buttons"

const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} color="blue" />
)

class HomePage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    console.log("navigationOptions", navigation)
    return {
      title: "Home",
      headerRight: (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="search"
            onPress={() => navigatorService.navigate("SearchListsPage")}
          />
        </HeaderButtons>
      ),
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          {!!navigation.getParam("firebaseUser", false) && (
            <Item
              title="profile"
              onPress={() => navigatorService.navigate("ProfilePage")}
            />
          )}
        </HeaderButtons>
      )
    }
  }

  render() {
    return (
      <Layout navigationOptions={HomePage.navigationOptions}>
        {userStore.isSetupComplete
          ? this.renderAuthorized()
          : this.renderUnauthorizedView()}
      </Layout>
    )
  }

  renderUnauthorizedView() {
    return (
      <View>
        <InfoMessage
          message="Sign in to create lists."
          buttonTitle="Sign In"
          onPress={() => navigatorService.navigate("SignInPage")}
        />
      </View>
    )
  }

  renderAuthorized() {
    if (userStore.user.gearListIds.length === 0) {
      return (
        <InfoMessage
          message="You don't have any lists yet."
          buttonTitle="Create List"
          onPress={() => navigatorService.navigate("CreateListPage")}
        />
      )
    }

    return (
      <View>
        <StyledText>Your Lists</StyledText>
        <StyledText>
          Hmm {!!this.props.firebaseUser ? "signed" : "unsigned"}
        </StyledText>
        {userStore.user.gearListIds.map(gearListId => {
          const gearList = gearStore.gearLists[gearListId]

          return <GearListPreivew key={gearList.id} gearList={gearList} />
        })}
        <StyledButton
          title="Create List"
          onPress={() => navigatorService.navigate("CreateListPage")}
        />
        <StyledButton
          title="profile"
          onPress={() => navigatorService.navigate("ProfilePage")}
        />
      </View>
    )
  }
}

export default view(HomePage)
