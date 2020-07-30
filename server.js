const express = require('express')
const app = express()
const db = require("./lib/db")
const port = process.env.PORT || 5000

app.use(express.static("public"))

app.get("/api/landmarks", (req, res) => {
  db.query(
    "SELECT * FROM landmarks;", 
    [], 
    (err, dbRes) => res.json(dbRes.rows)
  )
})

app.get("/api/landmarks/:id", (req, res) => {
  db.query(
    "SELECT * FROM landmarks where id = $1;", 
    [req.params.id], 
    (err, dbRes) => res.json(dbRes.rows)
  )
})


app.listen(port, () => console.log(`Server running on port ${port}`))