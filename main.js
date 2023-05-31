const sqlite3 = require("sqlite3").verbose();
let sql;
let db = new sqlite3.Database("./sqlite.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the database.");
});
//create table
// sql = `CREATE TABLE user(id INTEGER PRIMARY KEY ,name, age ,email)`;
// db.run(sql, (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Table created successfully");
// });

//insert data
// sql = `INSERT INTO user(name,age,email) VALUES(?,?,?)`;
// db.run(sql, ["xingyong", "15", "ba@gmail.com"], (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("data inserted successfully");
// });

//select data
// sql = `SELECT * FROM user`;
// db.all(sql, (err, rows) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

//update data
// sql = `UPDATE user SET name = ?,email=? WHERE id = ?`;
// db.run(sql, ["junxiang", "qqq", 2], (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
// });

// //delete data
// sql = `DELETE FROM user WHERE id = ?`;
// db.run(sql, [2], (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
// });
