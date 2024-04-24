const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();

const PDFDocument = require("pdfkit");
const fs = require("fs");
const doc = new PDFDocument();

app.listen(3000, () => {
  console.log("runing server");
});

app.post("/pdf", upload.single("image"), (req, res) => {
  if (req.file) {

    doc.pipe(fs.createWriteStream("demo.pdf"));
    doc.image(req.file.buffer, {
      fit: [500, 400],
      align: "center",
      valign: "center",
    });

    doc.end();
  } else {
    res.status(400).send("No image received!");
  }
});
