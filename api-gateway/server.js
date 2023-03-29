import app from "./app.js";
import "colors";

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || "localhost";
const ENV = process.env.ENV || "development";

app.listen(PORT, () => {
    console.log(`Server running at ${HOST}:${PORT} in ${ENV} mode`.bgRed);
}); 
