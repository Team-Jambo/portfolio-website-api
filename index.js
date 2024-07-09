import express from "express";

import { dbConnection } from "./config/db.js";

// initialise express
const app = express();

// instantiate the connection
dbConnection();

// define a port 
const port = process.env.PORT || 8000;

// Listen to them on the port
app.listen(port, () => {
    console.log(`App is listening at port ${port}!`);
});