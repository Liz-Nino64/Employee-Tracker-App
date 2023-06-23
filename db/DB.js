const connection = require("./connection");
const cTable = require('console.table');

class DB {
    constructor(db) {
        this.db = db;
    };

    getDepts = async () => {
        let [data] = await this.db.promise().query('SELECT * FROM department;');

        console.table(data);
    }
    getRoles = async () => {
        let [data] = await this.db.promise().query('SELECT * FROM role;');

        console.table(data);
    }
    getEmployees = async () => {
        let [data] = await this.db.promise().query('SELECT * FROM employee;');

        console.table(data);
    }
};

module.exports = new DB(connection);