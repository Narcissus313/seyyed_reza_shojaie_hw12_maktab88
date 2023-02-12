import { readFile, writeFile } from "fs";

const readFilePromise = (filePath) => {
	return new Promise((resolve, reject) => {
		readFile(filePath, "utf-8", (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});
};

const writeFilePromise = (filePath, data) => {
	return new Promise((resolve, reject) => {
		writeFile(filePath, data, (err) => {
			if (err) reject("err");
			resolve("data wrote");
		});
	});
};

export { readFilePromise, writeFilePromise };
