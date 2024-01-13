const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Vitalii:c4HooFQ8bqII7Z7K@cluster0.qadk5yu.mongodb.net/contacts_reader?retryWrites=true&w=majority";

  console.log(process.env)

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    })
  )
  .catch((error) => {
    console.log(error.message)
    process.exit(1)
  });
