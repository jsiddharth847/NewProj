const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;

  const message = err.message || "Something went wrong / ERROR FROM BACKEND";

  const extradetails = err.extradetails || "Backend Error: ";

  return res.status(status).json({ message, extradetails });
};

module.exports = errorMiddleware;
