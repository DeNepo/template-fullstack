'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  }),
);

if (config.MODE === 'development') {
  app.use(morgan('dev'));
}

// use routes
app.use('/api', routes);

// use error-handling middleware

// initialize server
app.listen(config.PORT, (err) => {
  if (err) {
    /* eslint-disable */
    console.error(err);
  } else {
    /* eslint-disable */
    console.log(
      `listening at http://localhost:${config.PORT} (${config.MODE} mode)`,
    );
  }
});
