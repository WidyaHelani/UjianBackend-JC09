const express = require('express')
const powrt = require('./config/port')

const AddMovies = require('./Movies/AddMovies')
const DeleteMovies = require('./Movies/DeleteMovies')
const EditMovies = require('./Movies/EditMovies')
const ShowAllMovies = require('./Movies/ShowAllMovies')

const AddCategories = require('./Categories/AddCategories')
const DeleteCategories = require('./Categories/DeleteCategories')
const EditCategories = require('./Categories/EditCategories')
const ShowAllCategories = require('./Categories/ShowAllCategories')


const AddConnection = require('./Movcat/AddConnection')
const DeleteConnection = require('./Movcat/DeleteConnection')

const app = express()
const port = powrt

app.use(express.json())
app.use(AddMovies)
app.use(DeleteMovies)
app.use(EditMovies)
app.use(ShowAllMovies)

app.use(AddCategories)
app.use(DeleteCategories)
app.use(EditCategories)
app.use(ShowAllCategories)

app.use(AddConnection)
app.use(DeleteConnection)


app.get('/', (req, res) => {
    res.send(`<h1>Selamat datang, di PORT ${port}</h1>`)
})

app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})