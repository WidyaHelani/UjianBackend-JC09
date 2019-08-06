const router = require('express').Router()
const conn = require('../../connection')

// CREATE Movies
router.post('/AddConnection', (req, res) => {
    const sql = `INSERT INTO Connection SET ?`
    const sql2 = `SELECT * FROM Movcat WHERE id = ?`
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


// DELETE Categories
router.delete('/DeleteConnection/:movecatid', (req, res) => {
    const sql = `DELETE FROM Movcat WHERE id = ?`
    const data = req.params.movecatid

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

module.exports = route