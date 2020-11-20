import multer from 'multer'
import { join } from 'path'

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, join(__dirname, '../../img'))
  },
  filename: (req, file, callback) => {
    callback(null, `${file.fieldname}-${Date.now()}-${Math.floor(Math.random() * 100)}-${file.originalname}`)
  }
})

const uploadStorage = multer({ storage })

export { uploadStorage }
