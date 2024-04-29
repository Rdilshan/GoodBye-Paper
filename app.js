// app.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.fields([{ name: 'pdf' }, { name: 'logo' }]), async (req, res) => {
    try {
        const pdfFile = req.files['pdf'][0];
        const logoFile = req.files['logo'][0];

        // Load PDF
        const pdfData = await fs.promises.readFile(pdfFile.path);
        const pdfDoc = await PDFDocument.load(pdfData);

        // Load logo
        const logoData = await fs.promises.readFile(logoFile.path);

        // Embed logo on each page
        const logoImage = await pdfDoc.embedPng(logoData);
        const pages = pdfDoc.getPages();
        for (const page of pages) {
            const { width, height } = page.getSize();
            page.drawImage(logoImage, {
                x: width / 2 - logoImage.width / 2,
                y: height / 2 - logoImage.height / 2,
                width: logoImage.width,
                height: logoImage.height,
                opacity: 0.5, // Adjust opacity as needed
            });
        }

        // Generate preview
        const previewDataUri = await pdfDoc.saveAsBase64({ dataUri: true });

        // Send preview to client
        res.send(`<iframe src="${previewDataUri}" width="100%" height="600"></iframe>`);

        // Clean up uploaded files
        await fs.promises.unlink(pdfFile.path);
        await fs.promises.unlink(logoFile.path);
    } catch (err) {
        console.error('An error occurred during file processing:', err);
        res.status(500).send(`An error occurred: ${err.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
