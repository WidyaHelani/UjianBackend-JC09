const router = require('express').Router()
const conn = require('../connection')

// Show All Categories
router.get('/ShowAllCategories/:categoriesid', (req, res) => {
    const sql = `SELECT description, completed FROM Categories
                WHERE user_id = ?`
    const data = req.params.categoriesid

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})
module.exports = route