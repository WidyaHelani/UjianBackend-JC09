const router = require('express').Router()
const conn = require('../connection')

// DELETE Movies
router.delete('/DeleteMovies/:moviesid', (req, res) => {
    const sql = `DELETE FROM Movies WHERE id = ?`
    const data = req.params.moviesid

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

module.exports = route