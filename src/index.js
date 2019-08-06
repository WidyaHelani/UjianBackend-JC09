const express = require('express')
const Movies = require('./route/Movies/MoviesRoute')
const Categories = require('.../src/route/CategoriesRoute')
const Movcat = require('.../src/route/ConnectionRoute')


const app = express()
const port = 2019

app.use(express.json())
app.use(Movies)
app.use(Categories)
app.use(Movcat)



app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})