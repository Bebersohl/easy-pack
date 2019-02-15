import React from "react"
import { Image } from "react-native"
import { view } from "react-easy-state"

const ProfileIcon = () => {
  return (
    <Image
      accessibilityLabel="Profile"
      source={{
        uri:
          "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ1c2VyLWNpcmNsZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXVzZXItY2lyY2xlIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDk2IDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjQ4IDhDMTExIDggMCAxMTkgMCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzODUgOCAyNDggOHptMCA5NmM0OC42IDAgODggMzkuNCA4OCA4OHMtMzkuNCA4OC04OCA4OC04OC0zOS40LTg4LTg4IDM5LjQtODggODgtODh6bTAgMzQ0Yy01OC43IDAtMTExLjMtMjYuNi0xNDYuNS02OC4yIDE4LjgtMzUuNCA1NS42LTU5LjggOTguNS01OS44IDIuNCAwIDQuOC40IDcuMSAxLjEgMTMgNC4yIDI2LjYgNi45IDQwLjkgNi45IDE0LjMgMCAyOC0yLjcgNDAuOS02LjkgMi4zLS43IDQuNy0xLjEgNy4xLTEuMSA0Mi45IDAgNzkuNyAyNC40IDk4LjUgNTkuOEMzNTkuMyA0MjEuNCAzMDYuNyA0NDggMjQ4IDQ0OHoiPjwvcGF0aD48L3N2Zz4="
      }}
      resizeMode="contain"
      style={{ height: 13, width: 13 }}
    />
  )
}

export default view(ProfileIcon)
