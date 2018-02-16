const Controller = require('egg').Controller;

class ServerController extends Controller {
  async index() {
    await this.ctx.render('test-server/index.html', { title: 'test server' })
  }

  async getSS () {
    this.ctx.set('Content-Type', 'text/event-stream')
    this.ctx.set('Cache-Control', 'no-cache')

    this.ctx.body = 'test'
  }
 }

module.exports = ServerController