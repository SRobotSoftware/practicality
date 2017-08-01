const express = require('express')
const path = require('path')

const app = express()

// Define Port
app.set('port', 3000)

app.use(express.static(path.join(__dirname, 'public')))

// Listen for requests
const server = app.listen(app.get('port'), () => {
  const port = server.address().port
  console.log(`Server listening on port: ${port}`)
})
