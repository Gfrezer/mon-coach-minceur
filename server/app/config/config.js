module.exports = {

  development: {
    username: "",
    password: "",
    database: "",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: 1
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
}
