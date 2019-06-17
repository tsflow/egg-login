const Service = require("egg").Service;

class UserService extends Service {
    async login(userName, password) {
        console.log("登录成功！");
    }
}

module.exports = UserService;