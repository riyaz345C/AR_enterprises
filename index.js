const express = require('express')
const app = express()
const cors =  require('cors')
const path = require('path')
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'build')))
let x = 5000
app.use('/', require(`./routes/home`))

app.listen(x , ()=>{
    console.log(`server running on port http://127.0.0.1:${x}`);
})