const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('/robots.txt','robots.txt')
routes.add('index', '/:slug+')
