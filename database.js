import mysql from 'mysql2'


const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Esoteric90@!',
    database: 'march_app',
}).promise()

// display all data in mysql DB
export async function getMarchs() {
    const [rows] = await pool.query("SELECT * FROM march")
    return rows
}

// fetch data by ID

export async function getMarch(id) {
    const [rows] = await pool.query(`SELECT * FROM march  WHERE id= ${id}`)
    return rows
}


// create data
export async function createMarch(title, content) {
    const [result] =
        await pool.query(`INSERT INTO march(title,contents)
    VALUES(?,?)
    `, [title, content])
    const id = result.insertId
    return getMarch(id)

}

