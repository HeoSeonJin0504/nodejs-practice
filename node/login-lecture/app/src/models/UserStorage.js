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

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch((err) => console.error(err));
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => console.error(err));
  }

  static async save(userInfo) {
    const users = await this.getUsers(true); // 데이터 추가
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users)); // 데이터 저장
    return { success: true };
  }
}
module.exports = UserStorage;
