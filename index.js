const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const port = 3000

dotenv.config()
mongoose.connect(process.env.MongoUrl).then((response)=> console.log("Connecté avec succès")).catch((error)=> console.log("error"))



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))