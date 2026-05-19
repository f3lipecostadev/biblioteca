import { createBookValidator, updateBookValidator } from '#validators/book'
import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'

export default class BooksController {
  async index({ auth }: HttpContext) {
    const books = await auth.user?.related('books').query()
    return books
  }

  async store({ request, auth }: HttpContext) {
    const user = auth.user!

    const { titulo, autor, genero, anoPublicacao, statusLeitura, observacoes } =
      await request.validateUsing(createBookValidator)

    const book = await user.related('books').create({
      titulo,
      autor,
      genero,
      anoPublicacao,
      statusLeitura,
      observacoes,
    })

    return book
  }

  async show({ params, response }: HttpContext) {
    try {
      const book = await Book.findByOrFail('id', params.id)
      return book
    } catch {
      return response.json({ error: 'book not found' })
    }
  }

  async update({ params, request, response, auth }: HttpContext) {
    try {
      const book = await Book.findByOrFail('id', params.id)
      const user = auth.user!

      const { titulo, autor, genero, anoPublicacao, statusLeitura, observacoes } =
        await request.validateUsing(updateBookValidator)

      if (user.id !== book.userId) {
        return response.json({
          error: 'Pode ser atualizado apenas pelo criador do livro',
        })
      }

      book.merge({
        titulo,
        autor,
        genero,
        anoPublicacao,
        statusLeitura,
        observacoes,
      })

      await book.save()

      return book
    } catch {
      return response.json({ error: 'book not found' })
    }
  }

  async destroy({ params, response, auth }: HttpContext) {
    try {
      const book = await Book.findByOrFail('id', params.id)
      const user = auth.user!

      if (user.id !== book.userId) {
        return response.json({
          error: 'Pode ser deletado apenas pelo criador do livro',
        })
      }

      await book.delete()
      return response.status(203)
    } catch {
      return response.json({ error: 'book not found' })
    }
  }
}
