import React from "react"
import { Image } from "react-native"
import { view } from "react-easy-state"

const SignInIcon = () => {
  return (
    <Image
      accessibilityLabel="Sign in"
      source={{
        uri:
          "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJzaWduLWluLWFsdCIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXNpZ24taW4tYWx0IGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDE2IDQ0OGgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDBjMC02LjYgNS40LTEyIDEyLTEyaDg0YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE2MGMwLTE3LjctMTQuMy0zMi0zMi0zMmgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoODRjNTMgMCA5NiA0MyA5NiA5NnYxOTJjMCA1My00MyA5Ni05NiA5NnptLTQ3LTIwMUwyMDEgNzljLTE1LTE1LTQxLTQuNS00MSAxN3Y5NkgyNGMtMTMuMyAwLTI0IDEwLjctMjQgMjR2OTZjMCAxMy4zIDEwLjcgMjQgMjQgMjRoMTM2djk2YzAgMjEuNSAyNiAzMiA0MSAxN2wxNjgtMTY4YzkuMy05LjQgOS4zLTI0LjYgMC0zNHoiPjwvcGF0aD48L3N2Zz4="
      }}
      resizeMode="contain"
      style={{ height: 13, width: 13 }}
    />
  )
}

export default view(SignInIcon)
