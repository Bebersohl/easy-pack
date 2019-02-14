import React from "react"
import { Image } from "react-native"

const WornIcon = () => {
  return (
    <Image
      accessibilityLabel="React logo"
      source={{
        uri:
          "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0c2hpcnQiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS10c2hpcnQgZmEtdy0yMCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02MzEuMiA5Ni41TDQzNi41IDBDNDE2LjQgMjcuOCAzNzEuOSA0Ny4yIDMyMCA0Ny4yUzIyMy42IDI3LjggMjAzLjUgMEw4LjggOTYuNWMtNy45IDQtMTEuMSAxMy42LTcuMiAyMS41bDU3LjIgMTE0LjVjNCA3LjkgMTMuNiAxMS4xIDIxLjUgNy4ybDU2LjYtMjcuN2MxMC42LTUuMiAyMyAyLjUgMjMgMTQuNFY0ODBjMCAxNy43IDE0LjMgMzIgMzIgMzJoMjU2YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjIyNi4zYzAtMTEuOCAxMi40LTE5LjYgMjMtMTQuNGw1Ni42IDI3LjdjNy45IDQgMTcuNS44IDIxLjUtNy4yTDYzOC4zIDExOGM0LTcuOS44LTE3LjYtNy4xLTIxLjV6Ij48L3BhdGg+PC9zdmc+"
      }}
      resizeMode="contain"
      style={{ height: 13, width: 13 }}
    />
  )
}

export default WornIcon
