import { readFilePromise } from "./read_write_promise.js";

export const read = (file) => {
	readFilePromise(file)
		.then((data) => console.log(data))
		.catch((err) => console.log("can not access file"));
};
