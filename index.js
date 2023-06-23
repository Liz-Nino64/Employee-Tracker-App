const { prompt } = require("inquirer");
const { getDepts, getRoles, getEmployees } = require("./db");

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

    } else if (task == "add a role") {

    } else {

    }
  })
}

init();