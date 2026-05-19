import vine from '@vinejs/vine'

const email = () => vine.string().email().maxLength(254)
const password = () => vine.string().minLength(8).maxLength(32)

export const signupValidator = vine.create({
  fullName: vine.string().nullable(),
  email: email().unique({ table: 'users', column: 'email' }),
  password: password(),
  passwordConfirmation: password().sameAs('password'),
})

export const loginValidator = vine.create({
  email: email(),
  password: vine.string(),
})

export const createUserValidator = vine.create({
  name: vine.string(),
  email: vine.string().email().unique({
    table: 'users',
    column: 'email',
  }),
  password: vine.string().minLength(6),
})

export const updateUserValidator = vine.create({
  name: vine.string(),
  password: vine.string().minLength(6).optional(),
})
