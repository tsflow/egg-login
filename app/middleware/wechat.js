let util = require("../wechat/util");

module.exports = option => {
	return async (ctx, next) => {
		if (util.isRequestFromWeChat(ctx)) {
			if (ctx.method == "GET") {
				ctx.body = ctx.query.echostr;
			} else if (ctx.method == "POST") {
				console.log("发消息了！");
				ctx.body = "";
			}
		} else {
			await next();
		}
	}
}