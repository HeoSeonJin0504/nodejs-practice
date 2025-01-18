"use strict";

const db = require("../config/db");

// UserStorage 클래스 생성 (클래스 안에 객체는 const 안쓴다)
class UserStorage {
  static getUsers(isAll, ...fields) {}

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) {
          reject(`${err}`); // err가 오브젝트이기 때문에 문자열로 변환
        } else {
          resolve(data[0]);
        }
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          if (err) {
            reject(`${err}`); // err가 오브젝트이기 때문에 문자열로 변환
          } else {
            resolve({ success: true });
          }
        }
      );
    });
  }
}
module.exports = UserStorage;
