const router = require('express').Router()
const conn = require('../connection/connection')

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


// DELETE Movies
router.delete('/DeleteMovies/:moviesid', (req, res) => {
    const sql = `DELETE FROM Movies WHERE id = ?`
    const data = req.params.moviesid

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})


//Edit Movies
router.patch('/EditMovies/:moviesid', (req, res) => {
    const sql = `Edit Movies SET completed = true
                WHERE id = ?`
    const data = req.params.moviesid

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})


// Show All Movies
router.get('/ShowAllMovies/:moviesid', (req, res) => {
    const sql = `SELECT description, completed FROM Movies
                WHERE user_id = ?`
    const data = req.params.moviesid

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

module.exports = route