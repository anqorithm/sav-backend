import app from "./app";
import "colors";

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || "localhost";
const ENV = process.env.ENV || "development";

const server = app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT} in ${ENV} mode`.bgBlue);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});



