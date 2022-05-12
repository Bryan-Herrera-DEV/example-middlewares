/**
 * Module dependencies.
*/

const express = require('express');
const lusca = require('lusca');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');

const { notFound, normalResponse, internalServerError } = require('./middlewares/responses.handler');
const v1 = require('./server/app');
/**
 * Configs
 */
require('./config/config');
require('./config/database');
require('./utils/strategies/index.passport');
/**
 * Create Express server and all middlewares configurations.
 */

const app = express();

app.use(passport.initialize());
app.use(morgan('dev'));
app.use(helmet());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Configure routes
 */
app.get('/', (req, res) => {
  normalResponse(res, {
    message: 'Welcome to the API',
  });
});
app.get('/prueba', [passport.authenticate('jwt', { session: false })], (req, res) => {
  normalResponse(res, {
    message: 'Welcome to the API',
  });
});

app.use('/api/v1', v1);

/**
 * Error handler: 404, 500
 */

app.use((req, res) => {
  notFound(res, {
    message: `${req.originalUrl} not found`,
  });
});

app.use((err, req, res) => {
  internalServerError(res, err, 500);
});

/**
 * Open server
 */
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
