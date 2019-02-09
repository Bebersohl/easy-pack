export function validateEmail(email) {
  return /^\S+@\S+$/.test(email)
}
