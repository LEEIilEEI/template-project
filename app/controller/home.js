const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('app/index.html', { title: 'test jenkins' })
  }
}

module.exports = HomeController