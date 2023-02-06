const Jimp = require("jimp");

Jimp.read("./file_example_PNG_500kB.png")
	.then((lenna) => {
		return lenna
			.resize(320, 320) // resize
			.quality(100) // set JPEG quality
			.write("result.jpg"); // save
	})
	.catch((err) => {
		console.error(err);
	});
