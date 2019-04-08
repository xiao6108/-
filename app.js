const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const bodyParser = require('body-parser')
const generate = require('./generate')
const ChooseCareer = require('./career')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const career = ChooseCareer(options)
  const talk = generate(options)
  res.render('index', { talk: talk, career: career, options: options })
})

app.listen(port, () => {
  console.log(`Express app listen on https://localhost${port}`)
})