const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = 'Hello world';
    await this.ctx.render('app-main/index.html', { title: 'test d3' })
  }
}

module.exports = HomeController;