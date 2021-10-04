module.exports = {
    HOST: "sql5064.site4now.net",
    USER: "db_a7a894_mssql_admin",
    PASSWORD: "Aa123456",
    DB: "db_a7a894_mssql",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};