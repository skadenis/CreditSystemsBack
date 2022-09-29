"use strict";
let DataBase = require("../common/database");
let config = require("../../config");
let jwt = require("jsonwebtoken");

module.exports = class users {
  constructor() {}

  async auth(data) {
    // Data model
    // {login: 'string', password: 'string'}
    let return_data = {};
    let Users = await new DataBase("users").getBy("login", data.login);

    if (Users.length > 0) {
      // Кодирование пароля
      let user = Users[0]; // Пользователь с одним логином может быть всего один
      if (data.password === user.password) {
        delete user.password;
        // user.rights = await rights(user.rights);

        let token = await jwt.sign(user, config.jwt.secretKey, {
          algorithm: config.jwt.algorithm,
        });
        return_data = { status: 200, info: user, token: token };
      } else {
        return_data = { status: 401, description: "have error in password" };
      }
    } else {
      return_data = { status: 404, description: "no such user" };
    }
    return return_data;
  }
};
