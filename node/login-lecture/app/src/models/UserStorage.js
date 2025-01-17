"use strict";

const db = require("../config/db");

// UserStorage 클래스 생성 (클래스 안에 객체는 const 안쓴다)
class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // users의 key값을 배열로 반환 => [id, password, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) {
      return users;
    }
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        // users에 field가 존재하면
        newUsers[field] = users[field]; // newUsers에 field 추가
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {}

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {}
}
module.exports = UserStorage;
