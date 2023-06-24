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
        return console.table(this.db.promise().query('INSERT INTO department (name) SET (?)', [answers.deptName]));
    }
    addRole = async (answers) => {
        return console.table(this.db.promise().query('INSERT INTO role (title, salary, department_id) SET (?)', [answers.roleTitle, answers.roleSalary, answers.roleDept]));
    }
    addEmployee = async (answers) => {
        return console.table(this.db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) SET (?)', [answers.employeeFirstName, answers.employeeLastName, answers.employeeRoleId, answers.employeeManagerId]));
    }
};

module.exports = new DB(connection);