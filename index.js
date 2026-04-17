const express = require('express')
process.loadEnvFile()

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hola mundo")
})

app.listen(PORT, () => {
    console.log('Corriendo')
})