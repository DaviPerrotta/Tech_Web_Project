function validate() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	if (username === 'activity_owner' && password === 'pippo_is_the_owner') {
		alert('Login successfully');
		window.open("Principal_Page.html");
	} else {
		alert('Login failed');
	}
}
