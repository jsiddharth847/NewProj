const validate = (schema) => async (req, res, next) => {
  try {
    const parsebody = await schema.parseAsync(req.body);

    req.body = parsebody;
    next();
  } catch (error) {
    const status = 422;
    const message = "Invalid request payload";
    const extradetails = error.errors[0].message;
    const err = {
      status,
      message,
      extradetails,
    };
    console.error("Validation error:", err);
    // res.status(400).json({ msg: errMsg });
    next(err);
  }
};

module.exports = validate;
