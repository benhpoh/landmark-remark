const pg = require('pg');

const pool = new pg.Pool({
    database: 'landmark',
    password: 'ubuntu'
})

module.exports = {
    query: (sql, params, callbackFn) => {
        return pool.query(sql, params, callbackFn)
    }
}