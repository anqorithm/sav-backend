const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const graphQLServer = require('./controllers/GraphQL');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function startApolloServer() {
  await graphQLServer.start();

  graphQLServer.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`Server running at http://localhost:4000${graphQLServer.graphqlPath}`);
}

startApolloServer().catch(err => {
  console.error(err);
  process.exit(1);
});

dotenv.config();
connectDB();

app.use(
  cors({
    origin: "*",
  })
);

/* setup middlewares */
app.use(morgan("dev"));

/* setup routes */
const installmentRoutes = require("./routes/installment.routes");
app.use("/api/v1/installments", installmentRoutes);

app.get("/", (req, res) => {
  res
    .json({
      message: `hello, this microservice 3, for more help go to /help`,
      statusCode: 200,
    })
    .status(200);
});

app.get("/help", (req, res) => {
  res.json({
    data: {
      routes: [
        "GET /api/v1/products",
        "GET /api/v1/products/:id",
        "POST /api/v1/products",
        "PUT /api/v1/products/:id",
        "DELETE /api/v1/products/:id",
      ],
      statusCode: 200,
    },
  });
});

app.get("/health", (req, res) => {
  res
    .json({
      message: "ok",
      statusCode: 200,
    })
    .status(200);
});

app.get("*", function (req, res) {
  res
    .json({
      message: "not found",

      statusCode: 404,
    })
    .status(404);
});

module.exports = app;