const Pool = require('pg').Pool
const password = process.env['PASSWORD_POSTGRES']

const pool = new Pool(
    {
        user: "allezz",
        host:'localhost',
        database:'nodetest',
        password:password,
        port:5432
    }
)