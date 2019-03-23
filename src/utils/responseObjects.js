// Generic success message
const Success = (res, data) => {
  res.status(200).json(
    {
      meta: {
        code: 200,
      },
      data,
    },
  );
};

const InvalidLogin = (res) => {
  res.status(401).json(
    {
      meta: {
        code: 401,
      },
    }
  )
}

const BadRequest = (res, errorObjects) => {
  res.status(400).json(
    {
      errors: errorObjects,
    },
  );
}

const ParameterValidationErrors = (res, validationError) => {
  const errors = validationError.errors.map(e => (
    {
      status: 400,
      title: 'INVALID_PARAMETER',
      source: {
        parameter: e.field,
        messages: e.messages,
      },
    }));
  return BadRequest(res, errors);
}

module.exports = {
  Success,
  InvalidLogin,
  ParameterValidationErrors,
};
