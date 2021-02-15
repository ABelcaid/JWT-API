const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const jwt=require('jsonwebtoken');

require('dotenv').config()




app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())





mongoose.connect(process.env.DB_CONNECTION , {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
}).then(() => {
 console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});





const userRoute = require('./routes/user');
const bookRoute = require('./routes/book');


app.use('/user' ,userRoute);
app.use('/book' ,bookRoute);





app.get('/', (req, res) => {
  res.send('Hello World!')
})
























app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})