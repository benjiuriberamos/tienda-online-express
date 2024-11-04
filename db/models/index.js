const { User, UserSchema } = require('./user.model');
// const { User, userSchema } = require('./user.model');
// const { User, userSchema } = require('./user.model');
// const { User, userSchema } = require('./user.model');
// const { User, userSchema } = require('./user.model');


function stupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  // User.init(UserSchema, User.config(sequelize));
  // User.init(UserSchema, User.config(sequelize));
  // User.init(UserSchema, User.config(sequelize));
  // User.init(UserSchema, User.config(sequelize));
}

module.exports = { stupModels }
