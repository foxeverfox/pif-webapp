const express = require('express')
const connectDB = require('./config/db')

const app= express()
app.get('/', ( req, res) => {
    res.send('API Running Bosque')
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });




app.use(express.json({extended:false}));
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/relation', require('./routes/api/relation'))
app.use('/api/project', require('./routes/api/project'))
app.use('/api/batch', require('./routes/api/batch'))
app.use('/api/invoice', require('./routes/api/invoice'))


app.use('/api/profile',require('./routes/api/profiles'))





const PORT = process.env.PORT || 5000

app.listen(PORT , () => {

    console.log(`Server started on Port ${PORT} `)
})