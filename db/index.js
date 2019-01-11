// const users = require("../resources/users");
const mongo = require("./connect");
const { DB_NAME } = require("./config");

module.exports = {
    getUsers: function() {
      const db = mongo.instance().db(DB_NAME);
      const users = db.collection("users").find({}).toArray();
      return users;
      // return users;
    },
    getUserById: function(id) {
      const db = mongo.instance().db(DB_NAME);
      const user = db.collection("users").findOne({
        _id: id
      });
      return user;
      // return users.filter(user=>user._id===id);
    },
    getUserByAgeRange: function(lower = 0, higher = 99) {
      const db = mongo.instance().db(DB_NAME);
      const users = db.collection("users").find({
        age: {
          $gte: +lower,
          $lte: +higher,
        }
      }).toArray();
      return users;
        // return users.filter(user=>user.age >= lower && user.age <= higher);
    }
}
