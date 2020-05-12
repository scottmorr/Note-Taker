const express = require("express");


const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public"));
app.use("/api", require("./routes/apiroutes"));
app.use("/", require("./routes/htmlroutes"));

app.listen(PORT, ()=> console.log(`listening on PORT ${PORT}`))

 




