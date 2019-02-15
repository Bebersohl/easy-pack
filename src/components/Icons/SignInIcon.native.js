import React from "react"
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from "react-native-svg"
import { view } from "react-easy-state"

const SignInIcon = props => {
  return (
    <Svg
      className="svg-inline--fa fa-sign-in-alt fa-w-16"
      height="15"
      role="img"
      width="15"
      viewBox="0 0 512 512"
      data-prefix="fas"
      data-icon="sign-in-alt"
    >
      <Path
        d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
        fill="black"
      />
    </Svg>
  )
}

export default view(SignInIcon)
