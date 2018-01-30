const express = require('express')
const app = express()
const PORT = process.env.PORT || '5000'

app.use(express.static('./client/build'))


app.listen(PORT, (req, res) => {
    console.log(`Se inicio server weather app en puerto ${PORT}`);
})