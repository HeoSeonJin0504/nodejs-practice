"use strict";

// UserStorage 클래스 생성 (클래스 안에 객체는 const 안쓴다)
class UserStorage {
  static #users = { // static으로 선언하면 클래스명으로 접근 가능, # = private
    id: ["test", "test1"],
    password: ["1234", "12345"],
    name: ["테스트", "테스트1"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      console.log(newUsers, field);
      if (users.hasOwnProperty(field)) { // users에 field가 존재하면
        newUsers[field] = users[field]; // newUsers에 field 추가
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}
module.exports = UserStorage;
