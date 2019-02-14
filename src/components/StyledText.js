import React from "react"
import { Text } from "react-native"
import { view } from "react-easy-state"
import EStyleSheet from "react-native-extended-stylesheet"

const StyledText = ({
  children,
  f1,
  f2,
  f3,
  f4,
  f6,
  f7,
  muted,
  italic,
  style,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.f5,
        styles.base,
        f1 && styles.f1,
        f2 && styles.f2,
        f3 && styles.f3,
        f4 && styles.f4,
        f6 && styles.f6,
        f7 && styles.f7,
        muted && styles.muted,
        italic && styles.italic,
        style && style
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}

const styles = EStyleSheet.create({
  f1: { fontSize: "3rem" },
  f2: { fontSize: "2.25rem" },
  f3: { fontSize: "1.5rem" },
  f4: { fontSize: "1.25rem" },
  f5: { fontSize: "1rem" },
  f6: { fontSize: ".875rem" },
  f7: { fontSize: ".75rem" },
  muted: { color: "grey" },
  italic: { fontStyle: "italic" },
  base: { color: "#333" }
})

export default view(StyledText)
