const router = require('express').Router()
const conn = require('../connection')

// DELETE Categories
router.delete('/DeleteCategories/:categoriesid', (req, res) => {
    const sql = `DELETE FROM Categories WHERE id = ?`
    const data = req.params.categoriesid

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

module.exports = route