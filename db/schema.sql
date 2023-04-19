DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE job (
  job_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  job_description STRING NOT NULL,
  department VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
)

CREATE TABLE manager (
  manager_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  department VARCHAR(30) NOT NULL,
  salary INT NOT NULL
)

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job_id INT NOT NULL,
  manager_id INT NOT NULL
)