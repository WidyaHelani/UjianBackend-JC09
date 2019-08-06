const router = require('express').Router()
const conn = require('../connection')

// Edit Movies
router.patch('/EditCategories/:categoriesid', (req, res) => {
    const sql = `Edit Categories SET completed = true
                WHERE id = ?`
    const data = req.params.categoriesid

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})
module.exports = route