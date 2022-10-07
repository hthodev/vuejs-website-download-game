const middleware = {}

middleware['authAdmin'] = require('..\\middleware\\authAdmin.js')
middleware['authAdmin'] = middleware['authAdmin'].default || middleware['authAdmin']

middleware['authUser'] = require('..\\middleware\\authUser.js')
middleware['authUser'] = middleware['authUser'].default || middleware['authUser']

export default middleware
