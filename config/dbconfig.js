module.exports = {
    HOST: "10.10.12.65",
    USER: "curauser",
    PASSWORD: "Aa123456",
    DB: "CURAPROD",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};