import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import express from 'express'
import { join } from 'path'
import { uploadStorage } from './middleware/upload'
import { download, upload } from './Routes'

const app = express()

app.use(cors())
  .use(json())
  .use(urlencoded({ extended: true }))
  .get('/', (req, res) => {
    express.static(join(__dirname, "../public"))
    res.sendFile(join(__dirname, '../public/index.html'))
  })
  .post('/download', download)
  .post('/upload', uploadStorage.single('userPhoto'), upload)

app.listen(4000, () => console.log('Connect on port 4000'))