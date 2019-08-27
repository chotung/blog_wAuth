const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const cors = require('cors')
const passport = require('passport')


dotenv.config({
  path: './config.env'
})

const app = express()

// Import Routes
const blogRoute = require('./routes/blogs')
const userRoute = require('./routes/users')

// Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  }),
  cors()
);
app.use(bodyParser.json())
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
app.use('/blogs', blogRoute)
app.use('/users', userRoute)



mongoose.connect(
  process.env.DB_KEY,
  {
    useNewUrlParser: true
  }, 
  () => console.log('connected to db'))
  





// // Dev Logging
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }

// Handle Production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static(__dirname + '/public/'));

//   // Handle SPA
//   app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }


app.get('/', (req, res) => {
  res.send('Hello')
})


app.listen(port, () => {
  console.log(`App running on ${process.env.NODE_ENV} mode on port ${port}`)
})
