"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

async function main() {
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		service: "gmail",
		auth: {
			user: process.env.user,
			pass: process.env.pass,
		},
	});

	let info = await transporter.sendMail({
		from: '"test 💎💎" <testthirdpartyapp@gmail.com>',
		to: "srz.shl@gmail.com",
		subject: "Hello ✔",
		// text: "Hello world",
		html: "<b style='color:red;'>Hello world</b>",
	});

	console.log("Message sent: %s", info.accepted.join(" "));
}

main().catch(console.error);
