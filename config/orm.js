const connection = require('./connection');

const orm = {
    
    selectAll(tableInput, cb) {
        const query = `SELECT * FROM ${tableInput}`
        connection.query(query, (err,res) => {
            if (err) throw err;
            cb(res)
        })
    },
    
    insertOne(table, cols, vals, cb) {
        const query = `INSERT INTO (${table}) (${cols}) (${vals})`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res)
        })
    },

    updateOne(table, cols, vals, condition, cb) {
        const query = `UPDATE ${table} set ${cols} = ${vals} where ${condition}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res)
        })
    }
}

module.exports = orm;
