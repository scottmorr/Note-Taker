const express = require("express");
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.use('/api', apiRoutes);
app.use('/', htmlroutes)

//start server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));