const express = require('express')

const app = express();


app.get('/', (req, res) => {
  res.send("docker successful")
})


app.listen(3001, function () {
  console.log("app listening on port 3001")
})