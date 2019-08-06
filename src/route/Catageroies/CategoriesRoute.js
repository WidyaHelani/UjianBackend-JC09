const router = require('express').Router()
const conn = require('../../connection')

// CREATE Categories
router.post('/AddCategories', (req, res) => {
    const sql = `INSERT INTO Categories SET ?`
    const sql2 = `SELECT * FROM Categories WHERE id = ?`
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
router.delete('/DeleteCategories/:categoriesid', (req, res) => {
    const sql = `DELETE FROM Categories WHERE id = ?`
    const data = req.params.categoriesid

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

// Edit Categories
router.patch('/EditCategories/:categoriesid', (req, res) => {
    const sql = `Edit Categories SET completed = true
                WHERE id = ?`
    const data = req.params.categoriesid

    conn.query(sql, data,  (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})


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