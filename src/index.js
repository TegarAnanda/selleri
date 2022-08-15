const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use("/api", require("./router"));

mongoose.connect(
    `mongodb://localhost/selleri`,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(result => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}).catch(e => {
    // logger.log({level: "error", message: e});
    throw new Error(e);
});

