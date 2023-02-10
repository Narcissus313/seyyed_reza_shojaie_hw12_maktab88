function renderUsersList(customUsers) {
	usersListRow.innerHTML = "";
	usersListRow.innerHTML += usersListGenerator(customUsers);
	pageLinksCreator(customUsers);
}

function usersListGenerator(userList) {
	let cards = "";
	for (
		let i = currentPage * numberOfCardsPerPage - numberOfCardsPerPage;
		i < currentPage * numberOfCardsPerPage;
		i++
	) {
		if (!userList[i]) return cards;
		cards += userCardMaker(userList[i]);
	}
	return cards;
}

function userCardMaker(user) {
	user.localImagePlace = `./images/${user["id"]}-image.jpg`;
	return `
	<div class="col-lg-4 ol-md-6 col-sm-6 ">
		<div class=" my-1 p-4">
		<div class="card px-2 shadow h-100">
			<img src="${user.localImagePlace}" class="card-img-top mb-2 px-3 rounded-3 mt-4">
			<h5 class="card-title my-3 text-center fw-bold">${user.first_name} ${user.last_name}</h5>
			<ul class="list-group list-group-flush h-25 fs-6">
				<li class="list-group-item p-2">id: ${user.id}</li>
				<li class="list-group-item p-2">email: ${user.email}</li>
			</ul>
			<button
				onclick='userProfileModalCreator(${user.id})'
				class="btn btn-primary my-3"
				data-bs-toggle="modal" data-bs-target="#userProfileModal"
				>
				Profile
			</button>
		</div>
	</div>
	</div>`;
}
