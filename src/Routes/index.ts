import { Request, Response } from 'express'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const download = (req: Request, res: Response) => {
  res.download(join(__dirname, "../../img/userPhoto-1605860470653-urinoir-pour-vache-001.jpg"))
}

const upload = (req: Request, res: Response) => {
  const a = readFileSync(req.file.path)
  const path = join(__dirname, "../../img/newImg.jpg")
  writeFileSync(path, a)
  res.download(path)
}

export { download, upload }
