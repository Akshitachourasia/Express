const express = require('express');

const app = express()
const port =  4545
app.use(express.json())

let tour = []
let Id = 1

app.post('/tour', (req, res) => {
  console.log("POST")
  const {place, price} = req.body
  const package = {id: Id++, place, price}
  tour.push(package)
  res.status(201).send(package)
})

app.get('/tour', (req, res) => {
  res.status(200).send(tour)
})

app.get('/tour/:id', (req, res) => {
  const t = tour.find(t => t.id === parseInt(req.params.id))
  if (!t) {
    return res.status(404).send('Tour not found')
  }
  res.status(200).send(t)
})


app.put('/tour/:id', (req, res) => {
  const t = tour.find(t => t.id === parseInt(req.params.id))

  if (!t) {
    return res.status(404).send('t not found')
  }
  const {place, price} = req.body
  t.place = place
  t.price = price
  res.status(200).send(t)
})



app.delete('/tour/:id', (req, res) => {
  console.log("delete")
  console.log(req.params.id)
  const index = tour.findIndex(t => t.id === parseInt(req.params.id))
  if (index === -1) {
    return res.status(404).send('tour not found')
  }
  tour.splice(index, 1)
  res.status(200).send('deleted')
})


app.listen(port, () => {
  console.log(`Server is running at port: ${port}...`)
})
