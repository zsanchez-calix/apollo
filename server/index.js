const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas");

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server Running");
});
