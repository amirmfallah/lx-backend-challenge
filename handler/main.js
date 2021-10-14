require("source-map-support/register");
const serverlessExpress = require("@vendia/serverless-express");
const app = require("./router");

console.log("Application Started");
module.exports.main = serverlessExpress({ app });
