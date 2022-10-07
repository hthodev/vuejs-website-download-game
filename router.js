import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c8d9ac2 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _305c98fa = () => interopDefault(import('..\\pages\\category.vue' /* webpackChunkName: "pages/category" */))
const _1782b4b8 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _1e49c1c6 = () => interopDefault(import('..\\pages\\ShowProduct.vue' /* webpackChunkName: "pages/ShowProduct" */))
const _28dfbac4 = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _00267914 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _bc74fd56 = () => interopDefault(import('..\\pages\\admin\\product\\add.vue' /* webpackChunkName: "pages/admin/product/add" */))
const _dfb7f2b2 = () => interopDefault(import('..\\pages\\admin\\product\\delete.vue' /* webpackChunkName: "pages/admin/product/delete" */))
const _42b15086 = () => interopDefault(import('..\\pages\\admin\\product\\edit.vue' /* webpackChunkName: "pages/admin/product/edit" */))
const _879bf73e = () => interopDefault(import('..\\pages\\admin\\product\\manager.vue' /* webpackChunkName: "pages/admin/product/manager" */))
const _f22be4fa = () => interopDefault(import('..\\pages\\admin\\user\\add.vue' /* webpackChunkName: "pages/admin/user/add" */))
const _021e4a18 = () => interopDefault(import('..\\pages\\admin\\user\\edit.vue' /* webpackChunkName: "pages/admin/user/edit" */))
const _da8572f8 = () => interopDefault(import('..\\pages\\admin\\user\\role.vue' /* webpackChunkName: "pages/admin/user/role" */))
const _2c2f5d9a = () => interopDefault(import('..\\pages\\admin\\user\\view.vue' /* webpackChunkName: "pages/admin/user/view" */))
const _0a98c486 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1c8d9ac2,
    name: "admin"
  }, {
    path: "/category/:id",
    component: _305c98fa,
    name: "category"
  }, {
    path: "/search/:id",
    component: _1782b4b8,
    name: "search"
  }, {
    path: "/show/:id",
    component: _1e49c1c6,
    name: "ShowProduct"
  }, {
    path: "/signin",
    component: _28dfbac4,
    name: "signin"
  }, {
    path: "/signup",
    component: _00267914,
    name: "signup"
  }, {
    path: "/admin/product/add/",
    component: _bc74fd56,
    name: "admin-product-add"
  }, {
    path: "/admin/product/delete",
    component: _dfb7f2b2,
    name: "admin-product-delete"
  }, {
    path: "/admin/product/edit/:id",
    component: _42b15086,
    name: "admin-product-edit"
  }, {
    path: "/admin/product/manager",
    component: _879bf73e,
    name: "admin-product-manager"
  }, {
    path: "/admin/user/add",
    component: _f22be4fa,
    name: "admin-user-add"
  }, {
    path: "/admin/user/edit/:id",
    component: _021e4a18,
    name: "admin-user-edit"
  }, {
    path: "/admin/user/role",
    component: _da8572f8,
    name: "admin-user-role"
  }, {
    path: "/admin/user/view",
    component: _2c2f5d9a,
    name: "admin-user-view"
  }, {
    path: "/",
    component: _0a98c486,
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
