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

module.exports = {
  Success,
};
