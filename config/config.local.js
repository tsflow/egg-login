module.exports = {
	cluster: {
		listen: {
			port: 3001
		}
	},
	middleware: ["wechat"],
	wechat: {
		appID: "wx56ba33093882cc0a",
		appsecret: "441aaba49557cb656744ddda3b6350bd",
		token: "hhb"
	}
}