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

const getUsers = (req,res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC',(error,results)=>{
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}