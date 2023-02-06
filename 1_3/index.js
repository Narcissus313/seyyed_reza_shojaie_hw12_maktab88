const axios = require("axios");
let url = "https://reqres.in/api/users?page=1";

async function getUsersData(url) {
	const response = await axios.get(url);
	const usersData = response.data.data;
	// console.log("usersData: ", usersData);
	const headers = Object.keys(usersData[0]);

	const excelFileMaker = () => {
		// Require library
		const xl = require("excel4node");

		// Create a new instance of a Workbook class
		const wb = new xl.Workbook();

		// Add Worksheets to the workbook
		const ws = wb.addWorksheet("Sheet 1");
		// const ws2 = wb.addWorksheet("Sheet 2");

		// Create a reusable style
		const headerStyle = wb.createStyle({
			font: {
				color: "#FF0800",
				size: 18,
			},
			numberFormat: "$#,##0.00; ($#,##0.00); -",
			alignment: {
				wrapText: true,
				horizontal: "center",
				vertical: "center",
			},
		});

		const dataStyle = wb.createStyle({
			font: {
				color: "#000000",
				size: 12,
			},
			numberFormat: "$#,##0.00; ($#,##0.00); -",
			alignment: {
				wrapText: true,
				horizontal: "center",
				vertical: "center",
			},
		});

		// Set value of cell A1 to 100 as a number type styled with paramaters of style
		for (let i = 0; i < headers.length; i++) {
			ws.cell(1, i + 1)
				.string(String(headers[i]))
				// .style(style)
				.style(headerStyle);
			ws.column(i + 1).setWidth(24);
			ws.column(5).setWidth(40);
		}
		for (let i = 0; i < usersData.length; i++) {
			for (let j = 0; j < headers.length; j++) {
				ws.cell(i + 2, j + 1)
					.string(String(usersData[i][headers[j]]))
					.style(dataStyle);
			}
		}

		wb.write("Excel.xlsx");
	};
	excelFileMaker();
}

getUsersData(url);
