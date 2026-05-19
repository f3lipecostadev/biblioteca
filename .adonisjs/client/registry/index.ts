/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'access_tokens.store': {
    methods: ["POST"],
    pattern: '/session',
    tokens: [{"old":"/session","type":0,"val":"session","end":""}],
    types: placeholder as Registry['access_tokens.store']['types'],
  },
  'user.index': {
    methods: ["GET","HEAD"],
    pattern: '/user',
    tokens: [{"old":"/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['user.index']['types'],
  },
  'user.create': {
    methods: ["GET","HEAD"],
    pattern: '/user/create',
    tokens: [{"old":"/user/create","type":0,"val":"user","end":""},{"old":"/user/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['user.create']['types'],
  },
  'user.store': {
    methods: ["POST"],
    pattern: '/user',
    tokens: [{"old":"/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['user.store']['types'],
  },
  'user.show': {
    methods: ["GET","HEAD"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.show']['types'],
  },
  'user.edit': {
    methods: ["GET","HEAD"],
    pattern: '/user/:id/edit',
    tokens: [{"old":"/user/:id/edit","type":0,"val":"user","end":""},{"old":"/user/:id/edit","type":1,"val":"id","end":""},{"old":"/user/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['user.edit']['types'],
  },
  'user.update': {
    methods: ["PUT","PATCH"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.update']['types'],
  },
  'user.destroy': {
    methods: ["DELETE"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.destroy']['types'],
  },
  'access_tokens.destroy': {
    methods: ["DELETE"],
    pattern: '/session',
    tokens: [{"old":"/session","type":0,"val":"session","end":""}],
    types: placeholder as Registry['access_tokens.destroy']['types'],
  },
  'book.index': {
    methods: ["GET","HEAD"],
    pattern: '/book',
    tokens: [{"old":"/book","type":0,"val":"book","end":""}],
    types: placeholder as Registry['book.index']['types'],
  },
  'book.create': {
    methods: ["GET","HEAD"],
    pattern: '/book/create',
    tokens: [{"old":"/book/create","type":0,"val":"book","end":""},{"old":"/book/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['book.create']['types'],
  },
  'book.store': {
    methods: ["POST"],
    pattern: '/book',
    tokens: [{"old":"/book","type":0,"val":"book","end":""}],
    types: placeholder as Registry['book.store']['types'],
  },
  'book.show': {
    methods: ["GET","HEAD"],
    pattern: '/book/:id',
    tokens: [{"old":"/book/:id","type":0,"val":"book","end":""},{"old":"/book/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['book.show']['types'],
  },
  'book.edit': {
    methods: ["GET","HEAD"],
    pattern: '/book/:id/edit',
    tokens: [{"old":"/book/:id/edit","type":0,"val":"book","end":""},{"old":"/book/:id/edit","type":1,"val":"id","end":""},{"old":"/book/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['book.edit']['types'],
  },
  'book.update': {
    methods: ["PUT","PATCH"],
    pattern: '/book/:id',
    tokens: [{"old":"/book/:id","type":0,"val":"book","end":""},{"old":"/book/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['book.update']['types'],
  },
  'book.destroy': {
    methods: ["DELETE"],
    pattern: '/book/:id',
    tokens: [{"old":"/book/:id","type":0,"val":"book","end":""},{"old":"/book/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['book.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
