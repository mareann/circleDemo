import express from 'express';
import bodyParser from 'body-parser';

import ErrorHandlers from './utils/errorHandlers';
import { log } from './utils/logger';

const app = express();

// Enable support for JSON parsing of body arguments
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Hook up our routes
app.use('/', require('./routes'));

// If any route throws a ValidationError, this middleware will handle it
app.use(ErrorHandlers.ParameterValidationErrorHandler);

const port = 3000;

// Start the server listening
const server = app.listen(port, () => {
  log.info(`Demonstration API Running on port ${port}`);
});

// Handle Errors
app.use((err, req, res, next) => {
  // Log the request with error noted
  log.error('ERROR - %s, %s', req.method, req.url);

  // Log the Error
  log.error(err.stack);

  // Return 500 error code
  res.status(500).send({ message: 'Error' });
});

// Handle 404s
app.use((req, res, next) => {
  res.status(404).send({
    message: "Houston, we've had a problem here",
    urlRequested: `${req.method} ${req.url}`,
  });
});
