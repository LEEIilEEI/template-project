module.exports = app => {
  const { router, controller } = app
  
  router.get('/', controller.home.index)
  router.get('/d3', controller.d3.index)
  router.get('/server-test', controller.server.index)
  router.get('/server-test/api', controller.server.getSS)
}