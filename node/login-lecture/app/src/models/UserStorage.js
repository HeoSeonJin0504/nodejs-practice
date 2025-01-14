"use strict";

const fs = require("fs").promises; // 파일 시스템, promises - 비동기 처리에 효과적

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

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      console.log(newUsers, field);
      if (users.hasOwnProperty(field)) {
        // users에 field가 존재하면
        newUsers[field] = users[field]; // newUsers에 field 추가
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => console.error(err));
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return { success: true };
  }
}
module.exports = UserStorage;
