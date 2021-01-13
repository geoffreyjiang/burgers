const connection = require("./connection");

const orm = {
    
    selectAll(tableInput, cb) {
        const query = `SELECT * FROM ${tableInput}`
        connection.query(query, (err,res) => {
            if (err) throw err;
            cb(res)
        })
    },
    
    insertOne(table, cols, vals, cb) {
        const query = `INSERT INTO ${table} (${cols}) (${vals})`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res)
        })
    },

    updateOne(table, condition, cb) {
        const query = `UPDATE ${table} SET devoured = 1 WHERE ${condition};`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res)
        })
    },

    deleteOne(table, condition, cb) {
        const query = `DELETE FROM ${table} WHERE ${condition};`
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res)
        })
    }
}







module.exports = orm;
