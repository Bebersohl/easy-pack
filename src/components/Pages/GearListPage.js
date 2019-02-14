import React from "react"
import { Button, Switch, View } from "react-native"
import { view } from "react-easy-state"
import gearStore from "../../stores/gearStore"
import Layout from "../Layout"
import navigatorService from "../../navigatorService"
import MyPie from "../MyPie"
import StyledText from "../StyledText"
import userStore from "../../stores/userStore"
import LoadingOverlay from "../LoadingOverlay"

class GearListPage extends React.Component {
  static navigationOptions = {
    title: "List"
  }

  componentDidMount() {
    const { navigation } = this.props
    const gearListId = navigation.getParam("id", null)

    gearStore.fetchGearList(gearListId)
  }

  render() {
    const { navigation } = this.props
    const gearListId = navigation.getParam("id", null)
    const gearList = gearStore.gearLists[gearListId]

    if (!gearList) {
      return <LoadingOverlay loadingOverlayText="Fetching list..." />
    }

    return (
      <Layout navigationOptions={GearListPage.navigationOptions}>
        <StyledText f4>{gearList.name}</StyledText>
        <StyledText muted italic f6>
          Last updated {new Date(gearList.timestamp).toLocaleString()}
        </StyledText>
        <Switch />
        <View>
          <View style={{ marginTop: 30 }}>
            <View
              style={{
                borderBottomWidth: 1,
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between"
              }}
            >
              <StyledText style={{ flexGrow: 1, fontWeight: "500" }}>
                Pack
              </StyledText>
              <StyledText style={{ flexBasis: 20 }} f7 />
              <StyledText style={{ flexBasis: 20 }} f7 />
              <StyledText style={{ flexBasis: 60 }} f7>
                Weight
              </StyledText>
              <StyledText style={{ flexBasis: 45 }} f7>
                Price
              </StyledText>
              <StyledText style={{ flexBasis: 20, textAlign: "right" }} f7>
                Qty
              </StyledText>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 5,
                paddingBottom: 5,
                borderBottomWidth: 1,
                borderColor: "lightgrey"
              }}
            >
              <StyledText style={{ flexGrow: 1 }} f7>
                Simple Pack
              </StyledText>
              <StyledText style={{ flexBasis: 20 }} f7>
                W
              </StyledText>
              <StyledText style={{ flexBasis: 20 }} f7>
                C
              </StyledText>
              <StyledText style={{ flexBasis: 60 }} f7>
                1234.56g
              </StyledText>
              <StyledText style={{ flexBasis: 45 }} f7>
                $2000
              </StyledText>
              <StyledText style={{ flexBasis: 20, textAlign: "right" }} f7>
                1
              </StyledText>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 5,
                paddingBottom: 5,
                borderBottomWidth: 1,
                borderColor: "lightgrey"
              }}
            >
              <StyledText style={{ flexGrow: 1 }} f7>
                Simple Pack
              </StyledText>
              <StyledText style={{ flexBasis: 20 }} f7>
                W
              </StyledText>
              <StyledText style={{ flexBasis: 20 }} f7>
                C
              </StyledText>
              <StyledText style={{ flexBasis: 60 }} f7>
                1234.56g
              </StyledText>
              <StyledText style={{ flexBasis: 45 }} f7>
                $2000
              </StyledText>
              <StyledText style={{ flexBasis: 20, textAlign: "right" }} f7>
                1
              </StyledText>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 5,
                paddingBottom: 5,
                borderBottomWidth: 1,
                borderColor: "lightgrey"
              }}
            >
              <StyledText style={{ flexGrow: 1 }} f7>
                Simple Pack
              </StyledText>
              <StyledText style={{ flexBasis: 20 }} f7>
                W
              </StyledText>
              <StyledText style={{ flexBasis: 20 }} f7>
                C
              </StyledText>
              <StyledText style={{ flexBasis: 60 }} f7>
                1234.56g
              </StyledText>
              <StyledText style={{ flexBasis: 45 }} f7>
                $2000
              </StyledText>
              <StyledText style={{ flexBasis: 20, textAlign: "right" }} f7>
                1
              </StyledText>
            </View>
          </View>
        </View>
        <MyPie />
      </Layout>
    )
  }
}

export default view(GearListPage)
