const express = require("express")
const cors = require("cors")
const expressGraphQL = require("express-graphql")
const app = express()

app.use(cors());

app.use("/graphql", expressGraphQL({
  schema: schema,
  graphql: true
}))

app.listen(5000,()  => {
  console.log("The server is running on port 5000!")
})
