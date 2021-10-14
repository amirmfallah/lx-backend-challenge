const HttpError400 = () => {
  return {
    statusCode: 400,
    body: JSON.stringify({
      statusCode: 403,
      message: "Bad Request",
    }),
  };
};

const HttpError404 = () => {
  return {
    statusCode: 404,
    body: JSON.stringify({
      statusCode: 404,
      message: "Not Found",
    }),
  };
};

const HttpError500 = () => {
  return {
    statusCode: 500,
    body: JSON.stringify({
      statusCode: 500,
      message: "Internal Server Error",
    }),
  };
};

const HttpError401 = () => {
  return {
    statusCode: 401,
    body: JSON.stringify({
      statusCode: 401,
      message: "Unauthorized",
    }),
  };
};

const HttpError403 = () => {
  return {
    statusCode: 403,
    body: JSON.stringify({
      statusCode: 403,
      message: "Forbidden",
    }),
  };
};

module.exports = {
  HttpError400,
  HttpError500,
  HttpError401,
  HttpError403,
  HttpError404,
};
