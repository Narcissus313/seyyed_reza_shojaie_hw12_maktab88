import { readFilePromise, writeToFilePromise } from "./read_write_promise.js";
import { validteToCreateUser } from "./validation.js";

export const createNewUser = (newUser) => {
	readFilePromise("./tmp.json")
		.then((data) => {
			data = JSON.parse(data);
			if (validteToCreateUser(data, newUser)) {
				data.push(newUser);
				return writeToFilePromise("./tmp.json", JSON.stringify(data));
			}
		})
		.catch((err) => console.log(err));
};
