//config inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const { restart } = require('nodemon')

// ler JSON
app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// inicial endpoint

// create PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent (process.env.DB_PASSWORD)

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xg45ktz.mongodb.net/?retryWrites=true&w=majority`
            )
    .then(() => {
        console.log('Conectado ao MONGODB!')
        app.listen({
            host: '0.0.0.0',
            port: process.env.PORT ?? 3333,
        })
    })
    .catch((err) => console.log(err))

