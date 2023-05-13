require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dbStringConnection = process.env.MONGO_TEST_URL;


mongoose
  .connect(dbStringConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const disconnect = () => {
  mongoose.disconnect();
};

module.exports = { disconnect };
