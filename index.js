const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const port = 3000
const ProverbeEntrepreneuriatRouter = require('./Routes/ProverbeEntrepreneuriatRouter')

dotenv.config()
mongoose.connect(process.env.MongoUrl).then((response)=> console.log("Connecté avec succès")).catch((error)=> console.log("error"))

app.use(express.json({limit: '100mb'}))
app.use(express.urlencoded({limit: '100mb', extended: true}))

app.use('/Proverbe', ProverbeEntrepreneuriatRouter)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))