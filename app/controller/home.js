const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        let {
            ctx
        } = this;
        console.log("配置文件", ctx.app.config.message);
        //await ctx.service.user.login();
        //this.ctx.body = ctx.helper.showName();
        ctx.body = "xx";
    }

    async list() {
        const dataList = {
            list: [{
                id: 1,
                title: 'this is news 1',
                url: '/news/1'
            }, {
                id: 2,
                title: 'this is news 2',
                url: '/news/2'
            }]
        };
        await this.ctx.render('index.tpl', dataList);
    }
}

module.exports = HomeController;