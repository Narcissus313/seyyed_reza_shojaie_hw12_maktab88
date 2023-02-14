import { readFilePromise, writeToFilePromise } from "./read_write_promise.js";
import { validteToCreateUser } from "./validation.js";

export const createNewUser = (newUser) => {
	readFilePromise("./tmp.json")
		.then((data) => {
			data = JSON.parse(data);
			if (validteToCreateUser(data, newUser)) {
				data.push(newUser);
				writeToFilePromise("./tmp.json", JSON.stringify(data));
				return newUser;
			}
		})
		.then((newUser) => {
			console.log(`user with uid-->${newUser.uid} wrote`);
		})
		.catch((err) => console.log(err));
};
