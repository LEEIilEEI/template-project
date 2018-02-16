const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('app-main/index.html', { title: 'test d3' })
  }
}

module.exports = HomeController