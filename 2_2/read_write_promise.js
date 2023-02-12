import { readFile, writeFile } from "fs";

export const readFilePromise = (filePath) => {
	return new Promise((resolve, reject) => {
		readFile(filePath, "utf-8", (err, fileData) => {
			if (err) reject(err);
			resolve(fileData);
		});
	});
};

export const writeToFilePromise = (filePath, data) => {
	return new Promise((resolve, reject) => {
		writeFile(filePath, data, (err) => {
			if (err) reject("err");
			else {
				console.log("data wrote");
				resolve("data wrote");
			}
		});
	});
};
