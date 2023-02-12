export const validteToCreateUser = (data, inputData) => {
	if (typeof inputData !== "object" || Array.isArray(inputData)) {
		console.log("no correct object data");
		return false;
	}
	if (isNaN(inputData["uid"])) {
		console.log("not a correct uid");
		return false;
	}

	const dataStandardParams = Object.keys(data[0]);
	const inputDataParams = Object.keys(inputData);

	if (inputDataParams.length !== dataStandardParams.length) {
		console.log("params are not standard. less or more");
		return false;
	}
	for (const param of inputDataParams) {
		if (!dataStandardParams.includes(param)) {
			console.log("params are not standard");
			return false;
		}
		if (inputData[param] === null || inputData[param] === undefined) {
			console.log("values are not standard");
			return false;
		}
	}
	if (data.find((user) => user["uid"] === inputData["uid"])) {
		console.log("this user exists");
		return false;
	}
	return true;
};

export const validteToUpdateUser = (data, inputData) => {
	if (typeof inputData !== "object" || Array.isArray(inputData)) {
		console.log("not correct object data");
		return false;
	}
	const dataStandardParams = Object.keys(data[0]);
	const inputDataParams = Object.keys(inputData);

	for (const param of inputDataParams) {
		if (!dataStandardParams.includes(param)) {
			console.log("params are not standard");
			return false;
		}
		if (inputData[param] === undefined) {
			console.log("values are not standard");
			return false;
		}
	}
	return true;
};

export const validateTodeleteUser = (data, inputUserId) => {
	if (isNaN(inputUserId)) {
		console.log("not a correct uid");
		return false;
	}
	let targetUser = data.find((user) => user["uid"] === inputUserId);
	if (!targetUser) {
		console.log("no such a user with this uid is available");
		return false;
	}
	return true;
};
