import 'dotenv/config'
import express from 'express'
import { createServer } from 'node:http'
import connectDB from './db'
import globalRouter from './routes/global-router'
import { logger } from './logger'
import { createBucket, listBuckets } from './middlewares/s3-middleware'

connectDB()

const app = express()

app.use(express.json())
app.use(logger)
app.use('/api/v5', globalRouter)

const server = createServer(app)

listBuckets().then(() => {
  console.log('buckets listed')
  createBucket('nf-2024-altair-bucket-2').then(() => {
    console.log('bucket created')
    listBuckets().then(() => {
      console.log('buckets listed')
    })
  })
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000/api/v5')
})