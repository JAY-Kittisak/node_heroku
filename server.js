const express = require("express")
const app = express();
let port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/players", (req, res) => {
    res.json({result: "ok", data:[1,2,3,4,5]})
})

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`)
})