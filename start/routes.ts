import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'
import { middleware } from './kernel.ts'

router.post('/session', [controllers.AccessTokens, 'store'])
router.resource('/user', controllers.Users)

router
  .group(() => {
    router.delete('/session', [controllers.AccessTokens, 'destroy'])
    router.resource('/book', controllers.Books)
  })
  .use(middleware.auth())
