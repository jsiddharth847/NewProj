// const validate = (schema) => async (req, res, next) => {
//   try {
//     // Attempt to parse and validate the request body using the schema
//     const parsebody = await schema.parseAsync(req.body);

//     // If validation passes, attach the parsed body to the request
//     req.body = parsebody;
//     next();
//   } catch (error) {
//     const status = 422;
//     const message = "Invalid request payload";

//     // Check if error.issues is defined and contains at least one element
//     let extradetails = "Unknown validation error occurred";
//     if (error.issues && error.issues.length > 0) {
//       // Access the first issue and get the error message
//       extradetails = error.issues[0].message;
//     }

//     // Log validation error details for debugging
//     console.log("Validation Error Details:", extradetails);

//     const err = {
//       status,
//       message,
//       extradetails,
//     };

//     console.error("Validation error:", err);
//     res.status(400).json({ msg: err });
//     next(err);  // Pass the error to the next middleware
//   }
// };

// module.exports = validate;

const validate = (schema) => async (req, res, next) => {
  try {
    const parsebody = await schema.parseAsync(req.body);

    req.body = parsebody;
    next();
  } catch (error) {
    const status = 422;
    const message = "Invalid request payload";
    const extradetails = error.errors[0].message;
    console.log(error.errors[0].message);

    const err = {
      status,
      message,
      extradetails,
    };
    console.error("Validation error:", err);
    res.status(400).json({ msg: err });
    next(err);
  }
};

module.exports = { validate };
