let sha1 = require("sha1");
module.exports = {
	isRequestFromWeChat(ctx) {
		let {
			signature,
			timestamp,
			nonce,
			echostr
		} = ctx.query;
		let token = ctx.app.config.wechat.token;
		let contactStr = [token, timestamp, nonce].sort().join("");
		let encryptStr = sha1(contactStr);
		return encryptStr == signature;
	}
}