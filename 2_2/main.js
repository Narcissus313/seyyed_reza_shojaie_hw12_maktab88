import { createNewUser } from "./create.js";
import { read } from "./read.js";
import { updateUser } from "./update.js";
import { deleteUser } from "./delete.js";

const updateUserData = {
	firstname: "ali",
	lastname: "hajili",
	city: "qom",
	postalCode: "2345672345",
	phoneNumber: "02111234234",
	position: "ux",
};
const newUser = {
	uid: 12,
	firstname: "reza",
	lastname: "shojaee",
	city: "tehran",
	postalCode: "2345672345",
	phoneNumber: "02111234234",
	position: "backend",
};

// createNewUser(newUser);
// read("./tmp.json");
// updateUser(12, updateUserData);
// deleteUser(12);
