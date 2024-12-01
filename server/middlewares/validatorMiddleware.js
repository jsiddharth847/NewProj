const validate = (schema) => async (req, res, next) => {
  try {
    const parsebody = await schema.parseAsync(req.body);

    req.body = parsebody;
    next();
  } catch (error) {
    const errMsg = error.errors[0].message;
    console.error("Validation error:", errMsg);
    res.status(400).json({ msg: errMsg });
  }
};

module.exports = validate;
