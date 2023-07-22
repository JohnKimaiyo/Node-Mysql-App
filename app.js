import express from 'express'

import { getMarch, getMarchs,createMarch } from './database.js'

const app = express()

app.use(express.json())

app.get("/march", async (req, res) => {
  const notes = await getMarchs()
  res.send(march)
})

app.get("/march/:id", async (req, res) => {
  const id = req.params.id
  const note = await getMarch(id)
  res.send(march)
})

app.post("/march", async (req, res) => {
  const { title, contents } = req.body
  const note = await createMarch(title, contents)
  res.status(201).send(march)
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke 💩')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})