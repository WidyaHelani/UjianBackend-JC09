const router = require('express').Router()
const conn = require('../connection')

// CREATE Movies
router.post('/AddMovies', (req, res) => {
    const sql = `INSERT INTO Movies SET ?`
    const sql2 = `SELECT * FROM Movies WHERE id = ?`
    const data = req.body

    // INSERT
    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)

        // SELECT
        conn.query(sql2, result.insertId, (err, result2) => {
            if(err) return res.send(err)

            // SELECT memberikan result dalam bentuk array
            res.send(result2[0])
        })
    })
})

module.exports = route