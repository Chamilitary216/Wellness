//Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
//Requires our routes
const UserRoutes = require('./src/routes/UserRoutes');
const FitnessRoutes = require('./src/routes/FitnessRoutes');
const cors = require('cors')

const app = express();

const corsOptions = {
    origin: '*'
  }
  
  app.use(cors(corsOptions))

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//DB Config ???
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wellness", { useNewUrlParser: true })
.then(console.log('Success'));
//Middleware
app.use(passport.initialize());
//Config
require('./src/config/passport')(passport);
//Routes
//require('./src/routes/UserRoutes')(app);
app.use('/api/users', UserRoutes);
app.use('/api/fitness', FitnessRoutes)
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

 