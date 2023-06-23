const { createConnection } = require("mysql2");

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "libby001",
    database: "employee_db"
});

db.connect(err => {
    if (err) console.log(err);
});

module.exports = db;