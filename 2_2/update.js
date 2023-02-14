import { validteToUpdateUser } from "./validation.js";
import { readFilePromise, writeToFilePromise } from "./read_write_promise.js";

export const updateUser = (userId, userData) => {
	readFilePromise("./tmp.json")
		.then((data) => {
			data = JSON.parse(data);
			let targetUser = data.find((user) => user["uid"] === userId);
			if (!targetUser) {
				console.log("no such user exists");
				return;
			}
			if (validteToUpdateUser(data, userData)) {
				for (const param of Object.keys(userData)) {
					targetUser[param] = userData[param];
				}
				writeToFilePromise("./tmp.json", JSON.stringify(data));
				return userId;
			}
		})
		.then((userId) => {
			if (userId) console.log(`user with uid-->${userId} data updated`);
		})
		.catch((err) => {
			console.log(`error: ${err}`);
		});
};
