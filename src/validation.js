export function validateState(state) {
  if (state.hasOwnProperty("email")) {
    if (!state.email) return "email is required"
    if (!validateEmail(state.email)) return "email is not valid"
  }

  if (state.hasOwnProperty("password")) {
    if (!state.password) return "password is required"
    if (state.password.length < 8)
      return "password must be 8 characters or longer"

    if (state.hasOwnProperty("confirmPassword")) {
      if (!state.confirmPassword) return "confirm password is required"
      if (state.password !== state.confirmPassword)
        return "passwords must match"
    }
  }

  if (state.hasOwnProperty("displayName") && !state.displayName)
    return "display name is required"

  if (state.hasOwnProperty("name") && !state.name) return "Name is required"

  return ""
}

export function validateEmail(email) {
  return /^\S+@\S+$/.test(email)
}
