const express = require('express')
const app = express()
// CORS Required
const cors = require('cors')
const port = process.env.PORT || 5000
// CORS Used in APP
app.use(cors())

const courseCategory = require(`./data/courseCategory.json`)
const coursePerCategory = require(`./data/coursesPerCategory.json`)

app.get('/', (req, res) => {
  res.send('Hello World, This is Code Atoms Web Server!')
})

app.get('/category', (req, res) => {
  res.send(courseCategory)
})

app.get('/category/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const course = coursePerCategory.filter( singleCourse => singleCourse.category_id === id) || {}
  res.send(course)
})

app.get('/courses', (req, res) => {
  res.send(coursePerCategory)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  const singleCourse = coursePerCategory.find(perCourse => perCourse.id === id) || {}
  res.send(singleCourse)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})