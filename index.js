const express = require('express');
const app = express()
require('dotenv').config()
const databaseConnect = require('./config/dbConfig');
const authRouter = require('./router/authRoute');
const cookieParse = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT;
databaseConnect()

app.use(express.json())
app.use(cookieParse())
app.use(cors({
    origin:[process.env.CLIENT_URL],
    credentials:true
}))
app.use('/api/v1/auth',authRouter)
app.get('/',(req,res)=>{
    res.send({
        message:'hello world welcome to node.js'
    })
})

app.listen(PORT,()=>{
    console.log(`Server is listening on the PORT ${PORT}.`)
})