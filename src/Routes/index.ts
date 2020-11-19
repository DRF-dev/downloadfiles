import { Request, Response } from 'express'
import multer from 'multer'
import { join } from 'path'

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, join(__dirname, '../../img'))
  },
  filename: (req, file, callback) => {
    callback(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
  }
})

const uploadStorage = multer({ storage }).single('userPhoto')

const download = (req: Request, res: Response) => {
  res.download(join(__dirname, "../../img/Capture.JPG"))
}

const upload = (req: Request, res: Response) => {
  uploadStorage(req, res, (err: any) => {
    console.log(req.file)
    if (err) {
      return res.status(500).json({ err })
    }
  })
  res.redirect('/')
}

export { download, upload }
