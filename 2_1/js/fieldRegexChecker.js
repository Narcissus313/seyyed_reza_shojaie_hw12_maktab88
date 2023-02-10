function fieldRegexChecker(user = null) {
	const nameRegex = /[a-zA-Z\s]+/;
	const emailRegex = /^[a-zA-Z0-9_\.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
	if (!!user) {
		if (
			!nameRegex.test($("#creationModal-fnameInput").val().trim()) ||
			!nameRegex.test($("#creationModal-lnameInput").val().trim())
		) {
			alert("invalid first name or last name. just letters and space");
			return false;
		} else if (
			user.email != $("#creationModal-emailInput").val() &&
			!validateEmail($("#creationModal-emailInput").val())
		) {
			alert("Email exists. choose another one");
			return false;
		} else if (
			!emailRegex.test($("#creationModal-emailInput").val().trim())
		) {
			alert("Email is wrong");
			return false;
		}
		return true;
	}
	if (
		!nameRegex.test($("#creationModal-fnameInput").val().trim()) ||
		!nameRegex.test($("#creationModal-lnameInput").val().trim())
	) {
		alert("invalid first name or last name. just letters and space");
		return false;
	} else if (!validateEmail($("#creationModal-emailInput").val())) {
		alert("Email exists. choose another one");
		return false;
	} else if (!emailRegex.test($("#creationModal-emailInput").val().trim())) {
		alert("Email is wrong");
		return false;
	}
	return true;
}
