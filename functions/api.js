const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema")
const serverless = require("serverless-http");


const app = express();
module.exports.handler = serverless(app);

app.use(bodyParser.json())

app.use("/", graphqlHTTP({
      graphiql: true,
      schema
    })
  );