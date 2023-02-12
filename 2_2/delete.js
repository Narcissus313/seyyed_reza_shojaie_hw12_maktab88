import { validateTodeleteUser } from "./validation.js";
import { readFilePromise, writeToFilePromise } from "./read_write_promise.js";

export const deleteUser = (userId) => {
	readFilePromise("./tmp.json")
		.then((data) => {
			data = JSON.parse(data);
			if (validateTodeleteUser(data, userId))
				return data.filter((user) => user["uid"] !== userId);
			return null;
		})
		.then((data) => {
			if (data) {
				console.log("data deleted");
				return writeToFilePromise("./tmp.json", JSON.stringify(data));
			}
		})
		.catch((err) => console.log(err));
};
