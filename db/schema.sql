DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE department (
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(300) NOT NULL
);

CREATE TABLE role (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(300) NOT NULL,
  salary INT NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL,
  FOREIGN key (manager_id)
  REFERENCES employee (id)
);
