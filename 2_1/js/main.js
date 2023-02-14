let userProfileModal = document.getElementById("userProfileModal");
let newUserModal = $("#newUserModal");
let inputSearchbar = document.getElementById("inputSearchbar");
let newUserModalContent = $("#newUserModal .modal-content");
let modalHeader = document.querySelector(".modal-header");
let usersListRow = document.getElementById("usersList");
let btnSearch = document.getElementById("btnSearch");
let pagesUl = document.getElementById("pagesUl");
let form = document.querySelector("#form");
let modalContent = $(".modal-content");
let modal = $(".modal");
let btnEdit;
let btnDelete;
let btnUpdate;
let inputSearchBarValue;
let numberOfCardsPerPage = 6;
let currentPage = 1;

let targetUsers = [];
let usersData = [];
let newId;

async function fetchUserData() {
	let users = [];
	for (let i = 1; i < 3; i++) {
		const url = `https://reqres.in/api/users?page=${i}`;
		const resp = await fetch(url);
		const inputData = await resp.json();
		users.push(...inputData.data);
	}
	return users;
}

async function showUsers() {
	usersData = await fetchUserData();
	targetUsers = usersData;
	newId = calculateNewId();
	renderUsersList(usersData);
}
showUsers();

function calculateNewId() {
	let ids = targetUsers.map((user) => user.id);
	let max = Math.max.apply({}, ids);
	return max + 1;
}

function formPreventFromRefresh(event) {
	event.preventDefault();
}

function validateEmail(email) {
	for (const user of usersData) {
		if (user.email === email) return false;
	}
	return true;
}

function searchInUsers(value) {
	const filteredUsers = usersData.filter((item) => {
		for (const param of Object.keys(usersData[0])) {
			if (param === "avatar") continue;
			if (
				String(item[param])
					.toLowerCase()
					.includes(value.trim().toLowerCase())
			)
				return true;
		}
	});
	currentPage = 1;
	if (!filteredUsers.length) {
		usersListRow.innerHTML = `<h1 style="color:red;">Unfortunately Nothing found!!</h1>`;
		pagesUl.innerHTML = "";
		targetUsers = usersData;
		return;
	}
	targetUsers = filteredUsers;
	renderUsersList(targetUsers);
}

btnSearch.addEventListener("click", () => searchInUsers(inputSearchBarValue));

inputSearchbar.addEventListener("keyup", function (e) {
	inputSearchBarValue = inputSearchbar.value;
	if (inputSearchBarValue === "") {
		targetUsers = usersData;
		currentPage = 1;
		renderUsersList(targetUsers);
	}
	if (e.key === "Enter") searchInUsers(inputSearchBarValue);
});

function pageLinksCreator(usersData) {
	let pageNumber = Math.ceil(usersData.length / numberOfCardsPerPage);
	pagesUl.innerHTML = "";
	for (let i = 1; i < pageNumber + 1; i++) {
		pagesUl.innerHTML += `<li class="page-item ${
			i == currentPage ? "active" : ""
		}"><a class="page-link" href="#">${i}</a></li>`;
	}
}

pagesUl.addEventListener("click", function (e) {
	for (let i = 0; i < pagesUl.children.length; i++) {
		pagesUl.children[i].className = "page-item";
	}
	e.target.parentElement.className += " active";
	currentPage = +e.target.innerText;
	renderUsersList(targetUsers);
});

form.addEventListener("submit", formPreventFromRefresh);
