require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes.js');
const errorHandler = require('./middleware/error')
connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes )
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

//error handler should be the last piece of middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server is listning on port ${PORT}`))

process.on("unhandledRejection", (err, promise) => {
    console.log(`logged Error = ${err}`);
    server.close(() => process.exit(1));
})