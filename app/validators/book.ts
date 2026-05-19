import vine from '@vinejs/vine'

export const createBookValidator = vine.create({
  titulo: vine.string(),
  autor: vine.string(),
  genero: vine.string(),
  anoPublicacao: vine.number(),
  statusLeitura: vine.string(),
  observacoes: vine.string(),
})

export const updateBookValidator = vine.create({
  titulo: vine.string().optional(),
  autor: vine.string().optional(),
  genero: vine.string().optional(),
  anoPublicacao: vine.number().optional(),
  statusLeitura: vine.string().optional(),
  observacoes: vine.string().optional(),
})
