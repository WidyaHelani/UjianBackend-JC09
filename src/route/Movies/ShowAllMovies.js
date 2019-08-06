const router = require('express').Router()
const conn = require('../connection')

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