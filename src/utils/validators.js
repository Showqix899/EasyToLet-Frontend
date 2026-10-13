export const validateLogin = (form) => {
  const errors = {}

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!form.password) {
    errors.password = 'Password is required'
  }

  return errors
}