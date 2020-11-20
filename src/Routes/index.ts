import { Request, Response } from 'express'
import { join } from 'path'

const download = (req: Request, res: Response) => {
  res.download(join(__dirname, "../../img/userPhoto-1605860470653-urinoir-pour-vache-001.jpg"))
}

const upload = (req: Request, res: Response) => {
  console.log(req.file.filename)
  res.redirect('/')
}

export { download, upload }
