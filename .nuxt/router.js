import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _199ce1cc = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _d0ae32b2 = () => interopDefault(import('..\\pages\\category.vue' /* webpackChunkName: "pages/category" */))
const _7fac7a91 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _06ccf8f9 = () => interopDefault(import('..\\pages\\ShowProduct.vue' /* webpackChunkName: "pages/ShowProduct" */))
const _76fdf78b = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _e8d763fe = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _d67854f0 = () => interopDefault(import('..\\pages\\admin\\product\\add.vue' /* webpackChunkName: "pages/admin/product/add" */))
const _0aa73cd8 = () => interopDefault(import('..\\pages\\admin\\product\\delete.vue' /* webpackChunkName: "pages/admin/product/delete" */))
const _a104fa9a = () => interopDefault(import('..\\pages\\admin\\product\\edit.vue' /* webpackChunkName: "pages/admin/product/edit" */))
const _ba95f1d8 = () => interopDefault(import('..\\pages\\admin\\product\\manager.vue' /* webpackChunkName: "pages/admin/product/manager" */))
const _ac4f43a0 = () => interopDefault(import('..\\pages\\admin\\user\\add.vue' /* webpackChunkName: "pages/admin/user/add" */))
const _3cfa0f0b = () => interopDefault(import('..\\pages\\admin\\user\\edit.vue' /* webpackChunkName: "pages/admin/user/edit" */))
const _64cde912 = () => interopDefault(import('..\\pages\\admin\\user\\role.vue' /* webpackChunkName: "pages/admin/user/role" */))
const _24c41626 = () => interopDefault(import('..\\pages\\admin\\user\\view.vue' /* webpackChunkName: "pages/admin/user/view" */))
const _06d61df9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _199ce1cc,
    name: "admin"
  }, {
    path: "/category",
    component: _d0ae32b2,
    name: "category"
  }, {
    path: "/search",
    component: _7fac7a91,
    name: "search"
  }, {
    path: "/ShowProduct",
    component: _06ccf8f9,
    name: "ShowProduct"
  }, {
    path: "/signin",
    component: _76fdf78b,
    name: "signin"
  }, {
    path: "/signup",
    component: _e8d763fe,
    name: "signup"
  }, {
    path: "/admin/product/add",
    component: _d67854f0,
    name: "admin-product-add"
  }, {
    path: "/admin/product/delete",
    component: _0aa73cd8,
    name: "admin-product-delete"
  }, {
    path: "/admin/product/edit",
    component: _a104fa9a,
    name: "admin-product-edit"
  }, {
    path: "/admin/product/manager",
    component: _ba95f1d8,
    name: "admin-product-manager"
  }, {
    path: "/admin/user/add",
    component: _ac4f43a0,
    name: "admin-user-add"
  }, {
    path: "/admin/user/edit",
    component: _3cfa0f0b,
    name: "admin-user-edit"
  }, {
    path: "/admin/user/role",
    component: _64cde912,
    name: "admin-user-role"
  }, {
    path: "/admin/user/view",
    component: _24c41626,
    name: "admin-user-view"
  }, {
    path: "/",
    component: _06d61df9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
