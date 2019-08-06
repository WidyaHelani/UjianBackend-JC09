const router = require('express').Router()
const conn = require('../connection')

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