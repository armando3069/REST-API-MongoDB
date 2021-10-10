const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const users = require('./routes/users.js')
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use (morgan('dev'));

app.use(express.json());

app.use('/users', users);

app.get('/',(req,res)=>{
    res.send('wellcome')

})
app.listen(PORT,()=>{
    console.log(`Server runing on port : ${PORT}`);
})