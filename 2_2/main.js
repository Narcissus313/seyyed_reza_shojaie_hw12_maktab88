import { createNewUser } from "./create.js";
import { read } from "./read.js";
import { updateUser } from "./update.js";
import { deleteUser } from "./delete.js";

const updateUserData = {
	firstname: "al",
	lastname: "hajili",
	city: "qom",
	postalCode: "2345672345",
	phoneNumber: "02111234234",
	position: "ux",
};
const newUser = {
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
// deleteUser(123);
