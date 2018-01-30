const Controller = require('egg').Controller;

class ServerController extends Controller {
  async index() {
    // this.ctx.body = 'Hello world';
    await this.ctx.render('server/index.html', { title: 'test server' })
  }

  async getSS () {
    // header('Content-Type: text/event-stream');
    // header('Cache-Control: no-cache');
    this.ctx.set('Content-Type', 'text/event-stream')
    this.ctx.set('Cache-Control', 'no-cache')

    setInterval(() => {
      this.ctx.body = 'DAS'
    }, 1000)
    
  }
 }

module.exports = ServerController;