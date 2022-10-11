const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const route = express.Router();
const routes = require("./routes");
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

route.get("/", (req, res) => {
    res.send("Hello World")
})


route.use("/api", routes);

app.use(route);

app.listen(port, () => console.log("Porta ", port));
