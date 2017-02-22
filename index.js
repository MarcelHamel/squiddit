// Module requirements
const express         = require('express');
const app             = express();
const path            = require('path');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const logger          = require('morgan');
const session         = require('express-session');




// Express-sessions creates a user session
app.use(session({
  secret: 'DonkeyKong',
  cookie: { maxAge: null },
  saveUninitialized: false,
  resave: false
}));

// EJS as view engine
app.set('view engine', 'ejs');
// Morgan as logger with 'dev' reporting
app.use(logger('dev'));
// Set 'path' to use 'public' for static assets
app.use(express.static(path.join(__dirname,'public')));
// Body-parser to return json and read name attributes as extended keys
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Set method-override to... override methods.
app.use(methodOverride('_method'));


// Route all requests through 'resources.js' middleware
app.use(require('./resources'));

// Set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Listening on', PORT));
