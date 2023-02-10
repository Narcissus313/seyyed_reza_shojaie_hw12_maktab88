function userProfileModalCreator(data) {
	const targetUser = usersData.find((user) => user.id == data);

	modalContent.html(`
		<div class="modal-header">
            <h5 class="modal-title text-primary mt-2">${targetUser.first_name} ${targetUser.last_name}</h5>
        </div>
		<div class="modal-body p-0">
			<div class="row p-3">
				<div class="col p-3">
					<p>Id: ${targetUser.id}</p>
					<p>First Name: ${targetUser.first_name}</p>
					<p>Last Name: ${targetUser.last_name}</p>
					<p>Email: ${targetUser.email}</p>
				</div>
				<div class="col">
					<img src="${targetUser.localImagePlace}" class="card-img-top my-2 rounded-3 text-center col-6 h-75"></img>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-warning px-4" id="btnEdit">Edit</button>
			<button type="button" class="btn btn-danger px-4 d-none" id="btnDelete">Delete</button>
			<button type="button" class="btn btn-primary px-4 d-none" id="btnUpdate">Update</button>
			<button type="button" class="btn btn-secondary px-4" data-bs-dismiss="modal">Close</button>
		</div>`);
	let modalBody = $(".modal-body");
	btnEdit = $("#btnEdit");
	btnDelete = $("#btnDelete");
	btnUpdate = $("#btnUpdate");
	btnEdit.on("click", () => {
		btnUpdate.removeClass("d-none");
		btnDelete.removeClass("d-none");
		btnEdit.addClass("d-none");
		// console.log(modalBody);
		modalBody.html(`
		<div class="modal-body">
			<!-- firstname input -->
			<div class="mb-3">
				<label for="creationModal-fnameInput" class="form-label">Firstname *</label>
				<input type="text" class="form-control" id="creationModal-fnameInput" value="${targetUser.first_name}"/>
			</div>
			<!-- lastname input -->
			<div class="mb-3">
				<label for="creationModal-lnameInput" class="form-label">Lastname *</label>
				<input type="text" class="form-control" id="creationModal-lnameInput" value="${targetUser.last_name}"/>
			</div>
			<!-- email input -->
			<div class="mb-3">
				<label for="creationModal-emailInput" class="form-label">Email *</label>
				<input type="email" class="form-control" id="creationModal-emailInput" value="${targetUser.email}"/>
			</div>
    	</div>
		`);
	});
	btnUpdate.on("click", () => {
		let target = usersData.find((user) => user.id === targetUser.id);

		if (fieldRegexChecker(targetUser)) {
			target.first_name = $("#creationModal-fnameInput").val();
			target.last_name = $("#creationModal-lnameInput").val();
			target.email = $("#creationModal-emailInput").val();
			renderUsersList(usersData);
			modal.modal("hide");
		}
	});
	btnDelete.on("click", () => {
		if (confirm("Are you sure you want to delete the user?")) {
			usersData.splice(usersData.indexOf(targetUser), 1);
			renderUsersList(usersData);
			modal.modal("hide");
		}
	});
}
