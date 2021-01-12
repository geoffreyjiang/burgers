const connection = require('./connection');

const orm = {
    selectAll(tableInput, cb) {
        const query = `SELECT * FROM ${tableInput}`
        connection.query(query, (err,res) => {
            if (err) throw err;
            cb(res)
        })
    }
}