const router = require('express').Router()
const conn = require('../connection')

// Edit Movies
router.patch('/EditMovies/:moviesid', (req, res) => {
    const sql = `Edit Movies SET completed = true
                WHERE id = ?`
    const data = req.params.moviesid

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})
module.exports = route