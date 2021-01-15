const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection.mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection.mysql.createConnection({
    host: "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "rjexa5ywikr48627",
    port: 3306,
    password: "ohwwwmf9t9dsvyyj",
    database: "bnhdfo5vdpt2dzj0",
  })
}

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
})

connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });
  

module.exports = connection;


