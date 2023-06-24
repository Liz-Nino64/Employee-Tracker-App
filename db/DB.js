const connection = require("./connection");
const table = require('console.table');

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
    addDept = async (answers) => {
        let [data] = await this.db.promise().query(`INSERT INTO department (name) values (${answers.deptName})`)
        console.table(data);
    }
    addRole = async (answers) => {
        let [data] = await this.db.promise().query(`INSERT INTO role (title, salary, department_id) values (${answers.title}, ${answers.salary}, ${answers.department_id})`)
        console.table(data);
    }
    addEmployee = async (answers) => {
        let [data] = await this.db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) values (${answers.first_name}, ${answers.last_name}, ${answers.role_id}, ${answers.manager_id})`)
        console.table(data);
    }
};

module.exports = new DB(connection);