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

const createUser = (req,res) => {
    const {name,email} = req.body
    pool.query('INSERT INTO users (name,email) VALUES ($1,$2)',[name,email], (error,results)=>{
        if(error) {
            throw error
        }
        res.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const updateUser = (req,res) => {
    const id = parseInt(req.params.id)
    const {name,email} = req.body

    pool.query("UPDATE users SET name=$1,email=$2 WHERE id = $3",[name,email,id],(error,results)=>{
        if(error) {
            throw error
        }
        res.status(200).send(`User modified with ID:${id}`)
    })
}