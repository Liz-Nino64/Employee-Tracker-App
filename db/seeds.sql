INSERT INTO department (id, name)
VALUES  (001, "Customer Services"),
        (002, "Accounting"),
        (003, "HVAC"),
        (004, "Appliance"),
        (005, "Plumbing"),
        (006, "Electrical"),
        (007, "Human Resources"),
        (008, "Executive"),
        (009, "Parts");

INSERT INTO role (id, title, salary)
VALUES  (0101, "Customer Service Rep", 25000),
        (0102, "Customer Service Manager", 70000),
        (0103, "Technician Dispatcher", 50000),
        (0104, "HVAC Technician", 60000),
        (0105, "HVAC Manager", 70000),
        (0106, "Appliance Technician", 60000),
        (0107, "Appliance Manager", 70000),
        (0108, "Plumber", 60000),
        (0109, "Plumbing Manager", 70000),
        (0110, "Accounting Agent", 80000),
        (0111, "Accounting Manager", 90000),
        (0112, "Parts Rep", 30000),
        (0113, "Parts Manager", 70000),
        (0114, "Human Resources Rep", 50000),
        (0115, "Human Resources Manager", 70000),
        (0116, "Chief Executive Officer", 100000),
        (0117, "Chief Financial Officer", 100000);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (01, "Joe", "Schmoe", 0109, null),
        (02, "John", "Doe", 0108, 01),
        (03, "Jane", "Smith", 0101, null);