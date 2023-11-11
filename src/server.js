const express = require('express')

const app = express();


app.get('/', (req, res) => {
  res.send("docker successful")
})


app.listen(3000, "0.0.0.0", () => {
  console.log("app listening on port 3001")
})