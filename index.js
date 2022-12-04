const express = require('express')
const multer = require('multer')

const app = express()
const port = process.env.PORT || 3399

const uploader = multer({
    storage: multer.diskStorage({}),
    limits: {
        fileSize: 50 * 1024 * 1024,
        fieldSize: 50 * 1024 * 1024,
      }
    })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/upload", uploader.single("file"), async (req, res) => {
    // never get here as multer rejects as 413 (too large)
    res.json({
        success: true,
        file: req.file,
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
