//dependencies 
const express = require('express')
const app = express()
require('dotenv').config()
const {DATABASE_URL} = process.env
const PORT = 3001;
const mongoose = require('mongoose')
const Activity = require('./models/activity')

//middleware
const cors = require('cors')
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//database connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
mongoose.connection
.on('open', ()=> console.log('MongoDB connected'))
.on('close', ()=> console.log('MongoDB disconnected'))
.on('error', ()=> console.log(error))


app.get('/', (req, res)=>{
    res.send("Backend is up")
})
//index route
app.get('/activity', async (req, res)=>{
    try{res.json(await Activity.find({}))
    }catch(error){
        res.status(400).json(error)
    }
})
//post route
app.post('/activity', async(req, res)=>{
    try{
        res.json(await Activity.create(req.body))
    }catch(error){
        res.status(400).json(error)
    }
} )
//update route
app.put('/activity/:id', async(req, res)=>{
    try{
        res.json(await Activity.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch(error){
        res.status(400).json(error)
    }
})


app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`))

