/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  accessTokens: {
    store: typeof routes['access_tokens.store']
    destroy: typeof routes['access_tokens.destroy']
  }
  user: {
    index: typeof routes['user.index']
    create: typeof routes['user.create']
    store: typeof routes['user.store']
    show: typeof routes['user.show']
    edit: typeof routes['user.edit']
    update: typeof routes['user.update']
    destroy: typeof routes['user.destroy']
  }
  book: {
    index: typeof routes['book.index']
    create: typeof routes['book.create']
    store: typeof routes['book.store']
    show: typeof routes['book.show']
    edit: typeof routes['book.edit']
    update: typeof routes['book.update']
    destroy: typeof routes['book.destroy']
  }
}
