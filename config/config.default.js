exports.keys = "hhb";

exports.view = {
	defaultViewEngine: 'nunjucks',
	mapping: {
		'.tpl': 'nunjucks',
	},
	message: "默认环境",
	middleware: ['wechat'],

	// 配置 gzip 中间件的配置
	wechat: {
		threshold: 1024, // 小于 1k 的响应体不压缩
	}
};