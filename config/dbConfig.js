const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const databaseConnect = () => {
  mongoose
    .connect(MONGO_URI)
    .then((conn) => console.log(`{Connected to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err));
};

module.exports = databaseConnect;
