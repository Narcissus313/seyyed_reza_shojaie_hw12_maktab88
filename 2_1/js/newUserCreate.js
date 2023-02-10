function newUserCreator() {
	newUserModalContent.html(`
		<div class="modal-header">
            <h5 class="modal-title text-primary mt-2">New User</h5>
        </div>
		<div class="modal-body p-0">
			<div class="row p-3">
				<div class="col p-3">
					<div class="mb-3">
						<label for="creationModal-fnameInput" class="form-label">Firstname *</label>
						<input type="text" class="form-control" id="creationModal-fnameInput" value=""/>
					</div>
					<div class="mb-3">
						<label for="creationModal-lnameInput" class="form-label">Lastname *</label>
						<input type="text" class="form-control" id="creationModal-lnameInput" value=""/>
					</div>
					<div class="mb-3">
						<label for="creationModal-emailInput" class="form-label">Email *</label>
						<input type="email" class="form-control" id="creationModal-emailInput" value=""/>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-success px-4" id="btnCreateConfirm">Create</button>
		</div>`);
	btnCreateConfirm = $("#btnCreateConfirm");
	btnCreateConfirm.on("click", function () {
		let newUser = {};
		newUser.id = newId;
		if (fieldRegexChecker()) {
			newUser.first_name = $("#creationModal-fnameInput").val();
			newUser.last_name = $("#creationModal-lnameInput").val();
			newUser.email = $("#creationModal-emailInput").val();
			newUser.avatar = "";
			usersData.push(newUser);
			newId++;
			renderUsersList(usersData);
			newUserModal.modal("hide");
		}
	});
}
