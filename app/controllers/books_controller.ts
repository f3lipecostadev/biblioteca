import { createBookValidator, updateBookValidator } from '#validators/book'
import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
export default class BooksController {
  async index({ auth }: HttpContext) {
    const books = await auth.user?.related('books').query()
    return books
  }
  async store({ request, auth, response }: HttpContext) {
    const user = auth.user!
    const { titulo, autor, genero, anoPublicacao, statusLeitura, observacoes } =
      await request.validateUsing(createBookValidator)

    const statusPermitidos = ['lido', 'lendo', 'quero ler']
    if (!statusLeitura || !statusPermitidos.includes(statusLeitura.toLowerCase())) {
      return response.badRequest({
        error: 'Status de leitura inválido. Use apenas: lido, lendo ou quero ler.',
      })
    }
    const book = await user.related('books').create({
      titulo,
      autor,
      genero,
      anoPublicacao,
      statusLeitura: statusLeitura.toLowerCase(),
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
      const { titulo, autor, genero, anoPublicacao, statusLeitura, observacoes } =
        await request.validateUsing(updateBookValidator)

      if (statusLeitura) {
        const statusPermitidos = ['lido', 'lendo', 'quero ler']
        if (!statusPermitidos.includes(statusLeitura.toLowerCase())) {
          return response.badRequest({
            error: 'Status de leitura inválido. Use apenas: lido, lendo ou quero ler.',
          })
        }
      }

      book.merge({
        titulo,
        autor,
        genero,
        anoPublicacao,
        statusLeitura: statusLeitura?.toLowerCase(),
        observacoes,
      })
      if (auth.user?.id === book.userId) {
        await book.save()
      } else {
        return response.json({
          error: 'Pode ser atualizado apenas pelo criador do livro',
        })
      }
      return book
    } catch {
      return response.json({ error: 'book not found' })
    }
  }

  async destroy({ params, response, auth }: HttpContext) {
    try {
      const book = await Book.findByOrFail('id', params.id)
      if (auth.user?.id === book.userId) {
        await book.delete()
        return response.status(203)
      } else {
        return response.json({
          error: 'Pode ser deletado apenas pelo criador do livro',
        })
      }
    } catch {
      return response.json({ error: 'book not found' })
    }
  }
}
