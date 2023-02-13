const fs = require("fs/promises");

// [{code:'00001', name:'ali', numbers:[0911111, 09122222]}, {code:'00001', name:'ali', numbers:[0911111, 09122222]}]
let usersNamesAndNumbers = [];

fs.readFile("./names.txt")
	.then((data) => {
		data.toString()
			.split(/\r?\n/)
			.forEach((line) => {
				const uid = line.split("-")[0].trim();
				const name = line.split("-")[1].trim();
				let user = { code: uid, name: name, numbers: [] };
				usersNamesAndNumbers.push(user);
			});
	})
	.then(() => fs.readFile("./numbers.txt"))
	.then((data) => {
		data.toString()
			.split(/\r?\n/)
			.forEach((line) => {
				const uid = line.split("-")[0].trim();
				const number = line.split("-")[1].trim();
				usersNamesAndNumbers
					.find((user) => user.code === uid)
					.numbers.push(number);
			});
		return usersNamesAndNumbers;
	})
	.then((usersNamesAndNumbers) => {
		for (const user of usersNamesAndNumbers) {
			if (user.numbers.length < 1)
				console.log(`${user.name} has'nt any number.`);
			if (user.numbers.length === 1)
				console.log(
					`${user.name}'s phone number is ${user.numbers.join("")}.`
				);
			if (user.numbers.length > 1)
				console.log(
					`${user.name}'s phone numbers are ${user.numbers.join(
						", "
					)}.`
				);
		}
	})
	.catch((err) => console.log(err));
