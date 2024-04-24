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
app.post("/pdf", upload.array("images"), (req, res) => {
  try {
    if (req.files && req.files.length > 0) {
      const doc = new PDFDocument();
      const writeStream = fs.createWriteStream("demo.pdf");
      doc.pipe(writeStream);

      const pageWidth = doc.page.width;
      const pageHeight = doc.page.height;

      const padding = 50;

      const x = padding;
      const y = padding;
      const width = pageWidth - 2 * padding;
      const height = pageHeight - 2 * padding;

      req.files.forEach((file, index) => {
        if (index > 0) {
          doc.addPage();
        }
        doc.image(file.buffer, x, y, { width: width, height: height });
      });

      doc.end();
      res.status(200).send("Received!");
    } else {
      res.status(400).send("No images received!");
    }
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

app.get("/getpdf", (req, res) => {
  fs.readFile("./demo.pdf", (err, data) => {
    if (err) {
      console.error("Error reading PDF file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.contentType("application/pdf");
      res.send(data);
    }
  });
});
