import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'user.index': { paramsTuple?: []; params?: {} }
    'user.create': { paramsTuple?: []; params?: {} }
    'user.store': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'book.index': { paramsTuple?: []; params?: {} }
    'book.create': { paramsTuple?: []; params?: {} }
    'book.store': { paramsTuple?: []; params?: {} }
    'book.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'user.store': { paramsTuple?: []; params?: {} }
    'book.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'user.index': { paramsTuple?: []; params?: {} }
    'user.create': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.index': { paramsTuple?: []; params?: {} }
    'book.create': { paramsTuple?: []; params?: {} }
    'book.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'user.index': { paramsTuple?: []; params?: {} }
    'user.create': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.index': { paramsTuple?: []; params?: {} }
    'book.create': { paramsTuple?: []; params?: {} }
    'book.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'user.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'book.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}