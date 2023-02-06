var toPdf = require("custom-soffice-to-pdf");
var fs = require("fs");
var wordBuffer = fs.readFileSync("./test.docx");

toPdf(wordBuffer).then(
	(pdfBuffer) => {
		fs.writeFileSync("./test.pdf", pdfBuffer);
	},
	(err) => {
		console.log(err);
	}
);
