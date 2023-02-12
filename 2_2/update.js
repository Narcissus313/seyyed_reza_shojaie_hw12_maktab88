import { validteToUpdateUser } from "./validation.js";
import { readFilePromise, writeToFilePromise } from "./read_write_promise.js";

export const updateUser = (userId, userData) => {
	readFilePromise("./tmp.json")
		.then((data) => {
			data = JSON.parse(data);
			let targetUser = data.find((user) => user["uid"] === userId);

			if (validteToUpdateUser(data, userData)) {
				for (const param of Object.keys(userData)) {
					// if (param === "uid") continue;
					targetUser[param] = userData[param];
				}
				return writeToFilePromise("./tmp.json", JSON.stringify(data));
			}
		})
		.then((log) => console.log(log))
		.catch((err) => console.log(err));
};
