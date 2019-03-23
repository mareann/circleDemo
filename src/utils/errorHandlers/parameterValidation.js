import expressValidation from 'express-validation';
import { ParameterValidationErrors } from './../responseObjects';

/**
 * Handles express-validation ValidationError(s)
 * @param err Error object - if a ValidationError, this function will handle it
 * @param req
 * @param res
 * @param next
 */
export const ParameterValidationErrorHandler = (err, req, res, next) => {
  if (err && err instanceof expressValidation.ValidationError) {
    ParameterValidationErrors(res, err);
  } else if (err) {
    next(err);
  } else {
    next();
  }
};
