const { prompt } = require("inquirer");
const { getDepts, getRoles, getEmployees, addDept, addEmployee, addRole } = require("./db");

const init = () => {
  prompt([
    {
      type: 'list',
      name: 'task',
      message: 'What would you like to do?',
      choices: [ 'view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee']
    }
  ]).then(answers => {
    let { task } = answers;
    if (task == "view all departments") {
      getDepts().then(init);
    } else if (task == "view all roles") {
      getRoles().then(init);
    } else if ("view all employees") {
      getEmployees().then(init);
    } else if (task == "add a department") {
      prompt([
        {
          type: 'input',
          name: 'deptId',
          message: 'What is the id of your new department?'
        },
        {
          type: 'input',
          name: 'deptName',
          message: 'What is the name of your new department?'
        }
      ]).then( answers => (
      addDept(answers).then(init)));
    } else if (task == "add a role") {
      prompt([
        {
          type: 'input',
          name: 'roleId',
          message: 'What is the id of your new role?'
        },
        {
          type: 'input',
          name: 'roleTitle',
          message: 'What is the title of your new role?'
        },
        {
          type: 'input',
          name: 'roleSalary',
          message: 'What is the salary of your new role?'
        },
        {
          type: 'input',
          name: 'roleDept',
          message: 'What is the department ID of your new role?'
        }
      ]).then( answers => (
      addRole(answers).then(init)));
    } else {
      prompt([
        {
          type: 'input',
          name: 'employeeId',
          message: 'What is the id of your new employee?'
        },
        {
          type: 'input',
          name: 'employeeFirstName',
          message: 'What is the first name of your new employee?'
        },
        {
          type: 'input',
          name: 'employeeLastName',
          message: 'What is the last name of your new employee?'
        },
        {
          type: 'input',
          name: 'employeeRoleId',
          message: 'What is the role ID of your new employee?'
        },
        {
          type: 'input',
          name: 'employeeManagerId',
          message: 'What is the manager ID of your new employee?'
        }
      ]).then( answers => (
      addEmployee(answers).then(init)));
    }
  })
}

init();